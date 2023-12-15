# Contract Test Demo

## Overview

This application, built with Next.js and TypeScript, showcases contract testing in software development. It simulates a stock trading platform, featuring a user-friendly UI for displaying share prices and executing trade actions.

## What is Contract Testing?

Contract testing is a vital practice in software development, ensuring two systems (like a service and its consumer) communicate correctly. Think of it as establishing a 'contract' that defines the structure and format of their interactions.

### Why is Contract Testing Important?

- **Reliable Integration**: Guarantees that different systems can work together seamlessly.
- **Early Issue Detection**: Identifies problems early in the development cycle.
- **Time and Cost Efficiency**: Automates interaction validation, saving resources.
- **Independent Development**: Allows teams to work on services independently without integration concerns.

## Resources for Further Research

1. **Martin Fowler on Consumer-Driven Contracts**: Explore the concept of consumer-driven contracts in this insightful article by Martin Fowler.  
   [Read More](https://martinfowler.com/articles/consumerDrivenContracts.html)
2. **Introduction to Contract Testing with Pactflow**: This YouTube playlist provides a comprehensive guide to contract testing using Pactflow.  
   [Watch the Series](https://www.youtube.com/playlist?list=PLwy9Bnco-IpfZ72VQ7hce8GicVZs7nm0i)
3. **Pact Documentation**: Discover everything about Pact, a leading tool for contract testing.  
   [Explore Pact Docs](https://docs.pact.io/)
4. **Advanced Contract Testing Practices**: Gain deeper insights into best practices for writing consumer tests in contract testing, as discussed in this informative video.  
   [Watch the Video](https://www.youtube.com/watch?v=oPuHb9Rl8Zo)


## Project Structure

- **Frontend**: Interactive UI built with Next.js for stock trading simulations.
- **APIs**:
    - `GET /api/stocks`: Retrieves a list of stocks.
    - `POST /api/trade`: Handles buying and selling of stocks.
- **Testing**:
    - **Consumer Tests**: Validate frontend interactions with APIs.
    - **Provider Tests**: Ensure API integrity and response accuracy.

## Getting Started

1. **Clone the Repository**: `git clone https://github.com/Financial-Times/contract-test-demo`
2. **Install Dependencies**: Run `npm install` in the project directory.
3. **Launch the App**: Execute `npm run dev` to start the Next.js server.

## Running the Tests

- **Consumer Tests**: Execute `npm test` for consumer contract testing.
- **Provider Tests**: Run `npm run test:contract:provider` for provider contract testing.
