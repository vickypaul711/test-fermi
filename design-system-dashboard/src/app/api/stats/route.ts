import { NextResponse } from 'next/server';
import { ApiResponse } from '@/lib/types';

function delay() {
  return new Promise((res) =>
    setTimeout(res, Math.random() * 600 + 200)
  );
}

export async function GET() {
  await delay();

  const data = [
    { title: 'Revenue', value: '$12,340', change: 12 },
    { title: 'Users', value: '1,230', change: -5 },
    { title: 'Orders', value: '320', change: 8 },
    { title: 'Conversion', value: '3.2%', change: 2 },
  ];

  const response: ApiResponse<typeof data> = { data };

  return NextResponse.json(response);
}