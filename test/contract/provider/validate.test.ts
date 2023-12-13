import { Verifier } from '@pact-foundation/pact';
import path from 'node:path';
import { glob } from 'glob';

describe('Pact Verification', () => {
  it('validates the expectations of Matching Service', async () => {
    const pacts = await glob(path.resolve(process.cwd(), './pacts/*.json'));
    const verifier = new Verifier({
      providerBaseUrl: 'http://localhost:3000',
      pactUrls: pacts
    });

    return verifier.verifyProvider().then(() => {
      console.log('Pact Verification Complete ✅');
    });
  });
});
