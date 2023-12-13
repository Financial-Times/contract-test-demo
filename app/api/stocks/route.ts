import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      ticker: 'AAPL',
      price: 150.25
    }
  ]);
}
