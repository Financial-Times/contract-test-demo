import { MatchersV3, PactV3 } from '@pact-foundation/pact';
import axios from 'axios';
import path from 'node:path';

const provider = new PactV3({
  dir: path.resolve(process.cwd(), 'pacts'),
  consumer: 'MyConsumer',
  provider: 'MyProvider',
  logLevel: 'warn'
});

describe('POST /api/trader', () => {
  it('returns an HTTP 200 and success status when a user buys stock', async () => {
    // Arrange: Setup our expected interactions
    const expectedResponse = { status: 'success' };
    provider
      .given('I want to buy a stock')
      .uponReceiving('a request to buy a stock')
      .withRequest({
        method: 'POST',
        path: '/api/trade',
        headers: { Accept: 'application/json' },
        body: { action: 'buy' }
      })
      .willRespondWith({
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: MatchersV3.like(expectedResponse)
      });

    return provider.executeTest(async (mockserver) => {
      // Act: test our API client behaves correctly
      const { data } = await axios({
        baseURL: mockserver.url,
        headers: { Accept: 'application/json' },
        method: 'POST',
        url: '/api/trade',
        data: { action: 'buy' }
      });

      // Assert: check the result
      expect(data).toEqual(expectedResponse);
    });
  });
});
