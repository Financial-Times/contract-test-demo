import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { action } = await request.json();

  switch (action) {
    case 'buy':
      return NextResponse.json({ status: 'success' });
    case 'sell':
      return NextResponse.json({ status: 'success' });
    default:
      return NextResponse.json({ status: 'error' }, { status: 400 });
  }
}
