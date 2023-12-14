import { Verifier } from '@pact-foundation/pact';
import path from 'node:path';
import { globSync } from 'glob';

describe('Pact Verification', () => {
  it('validates the expectations of Matching Service', async () => {
    const verifier = new Verifier({
      providerBaseUrl: 'http://localhost:3000',
      pactUrls: globSync(path.resolve(process.cwd(), 'pacts/*.json')) // Finds all pacts in the pacts folder
    });

    return verifier.verifyProvider().then(() => console.log('Pact Verification Complete ✅'));
  });
});
