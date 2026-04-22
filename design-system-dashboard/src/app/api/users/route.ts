import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/lib/types';

const users = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
  email: `user${i}@example.com`,
  role: i % 2 === 0 ? 'Admin' : 'User',
}));

function delay() {
  return new Promise((res) =>
    setTimeout(res, Math.random() * 600 + 200)
  );
}

export async function GET(req: NextRequest) {
  await delay();

  const { searchParams } = req.nextUrl;

  const page = Number(searchParams.get('page') || 1);
  const limit = Number(searchParams.get('limit') || 10);
  const search = searchParams.get('search') || '';

  let filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  const response: ApiResponse<typeof paginated> = {
    data: paginated,
    meta: { page, totalPages, totalItems },
  };

  return NextResponse.json(response);
}