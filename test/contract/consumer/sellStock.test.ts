import { MatchersV3, PactV3 } from '@pact-foundation/pact';
import axios from 'axios';
import path from 'node:path';

const provider = new PactV3({
  dir: path.resolve(process.cwd(), 'pacts'),
  consumer: 'MyConsumer',
  provider: 'MyProvider'
});

describe('POST /api/trader', () => {
  it('returns an HTTP 200 and success status when a user sells stock', async () => {
    // Arrange: Setup our expected interactions
    const expectedResponse = { status: 'success' };
    provider
      .given('I want to sell some stock')
      .uponReceiving('a request to sell some stock')
      .withRequest({
        method: 'POST',
        path: '/api/trade',
        headers: { Accept: 'application/json' },
        body: { action: 'sell' }
      })
      .willRespondWith({
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: MatchersV3.like(expectedResponse)
      });

    return provider.executeTest(async (mockserver) => {
      // Act: test our API client behaves correctly
      const { data } = await axios.request({
        baseURL: mockserver.url,
        headers: { Accept: 'application/json' },
        method: 'POST',
        url: '/api/trade',
        data: { action: 'sell' }
      });

      // Assert: check the result
      expect(data).toEqual(expectedResponse);
    });
  });
});
