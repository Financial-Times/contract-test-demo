import { MatchersV3, PactV3 } from '@pact-foundation/pact';
import axios from 'axios';
import path from 'node:path';

const provider = new PactV3({
  dir: path.resolve(process.cwd(), 'pacts'),
  consumer: 'MyConsumer',
  provider: 'MyProvider'
});

describe('GET /api/stocks', () => {
  it('returns an HTTP 200 and a list of stocks', async () => {
    // Arrange: Setup our expected interactions
    const expectedResponse = { ticker: 'AAPL', price: 150.25 };
    provider
      .given('a list of stocks exists')
      .uponReceiving('a request for all stocks')
      .withRequest({
        method: 'GET',
        path: '/api/stocks',
        headers: { Accept: 'application/json' }
      })
      .willRespondWith({
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: MatchersV3.eachLike(expectedResponse)
      });

    return provider.executeTest(async (mockserver) => {
      // Act: test our API client behaves correctly
      const { data } = await axios.request({
        baseURL: mockserver.url,
        headers: { Accept: 'application/json' },
        method: 'GET',
        url: '/api/stocks'
      });

      // Assert: check the result
      expect(data).toEqual(expect.arrayContaining([expectedResponse]));
    });
  });
});
