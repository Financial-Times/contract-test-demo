import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { action } = await request.json();

  switch (action) {
    case 'buy':
      // TODO: Implement buy logic
      return NextResponse.json({ status: 'success' });
    case 'sell':
      // TODO: Implement sell logic
      return NextResponse.json({ status: 'success' });
    default:
      return NextResponse.json({ status: 'error' }, { status: 400 });
  }
}
