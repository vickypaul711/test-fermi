import { NextResponse } from 'next/server';
import { ApiResponse } from '@/lib/types';

function delay() {
  return new Promise((res) =>
    setTimeout(res, Math.random() * 600 + 200)
  );
}

export async function GET() {
  await delay();

  const data = Array.from({ length: 7 }, (_, i) => ({
    date: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 1000),
  }));

  const response: ApiResponse<typeof data> = { data };

  return NextResponse.json(response);
}