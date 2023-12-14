import { MatchersV3, PactV3 } from '@pact-foundation/pact';
import axios, { AxiosPromise } from 'axios';
import path from 'node:path';

const provider = new PactV3({
  dir: path.resolve(process.cwd(), 'pacts'),
  consumer: 'MyConsumer',
  provider: 'MyProvider'
});

const stocksExample = { status: 'success' };
const EXPECTED_BODY = MatchersV3.like(stocksExample);

const sellStock = (url: string): AxiosPromise => {
  return axios.request({
    baseURL: url,
    headers: { Accept: 'application/json' },
    method: 'POST',
    url: '/api/trade',
    data: { action: 'sell' }
  });
};

describe('POST /api/trader', () => {
  it('returns an HTTP 200 and success status', async () => {
    // Arrange: Setup our expected interactions
    //
    // We use Pact to mock out the backend API
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
        body: EXPECTED_BODY
      });

    return provider.executeTest(async (mockserver) => {
      // Act: test our API client behaves correctly
      const { data } = await sellStock(mockserver.url);

      // Assert: check the result
      expect(data).toEqual(stocksExample);
    });
  });
});
