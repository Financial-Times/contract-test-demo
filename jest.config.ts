import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts', 'jest-extended/all'],
  verbose: true,
  clearMocks: true
};

export default config;
