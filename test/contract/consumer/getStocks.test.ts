import { MatchersV3, PactV3 } from '@pact-foundation/pact';
import axios, { AxiosPromise } from 'axios';
import path from 'node:path';

const provider = new PactV3({
  dir: path.resolve(process.cwd(), 'pacts'),
  consumer: 'MyConsumer',
  provider: 'MyProvider'
});

const stocksExample = { ticker: 'AAPL', price: 150.25 };
const EXPECTED_BODY = MatchersV3.eachLike(stocksExample);

const getStocks = (url: string): AxiosPromise => {
  return axios.request({
    baseURL: url,
    headers: { Accept: 'application/json' },
    method: 'GET',
    url: '/api/stocks'
  });
};

describe('GET /api/stocks', () => {
  it('returns an HTTP 200 and a list of stocks', async () => {
    // Arrange: Setup our expected interactions
    //
    // We use Pact to mock out the backend API
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
        body: EXPECTED_BODY
      });

    return provider.executeTest(async (mockserver) => {
      // Act: test our API client behaves correctly
      const { data } = await getStocks(mockserver.url);

      // Assert: check the result
      expect(data).toEqual(expect.arrayContaining([stocksExample]));
    });
  });
});
