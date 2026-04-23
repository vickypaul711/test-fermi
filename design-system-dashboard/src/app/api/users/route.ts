import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/lib/types';

const users = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
  email: `user${i}@example.com`,
  role: i % 2 === 0 ? 'Admin' : 'User',
  status: i % 3 === 0 ? 'Active' : 'Inactive',
  createdAt: new Date(
    Date.now() - i * 86400000
  ).toISOString().split('T')[0],
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
  const sort = searchParams.get('sort');
  const order = searchParams.get('order') || 'asc';

  let filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort) {
    if (!['name', 'email', 'role'].includes(sort || '')) {
      return
    }
    filtered = filtered.sort((a: any, b: any) => {
      const valA = a[sort as keyof typeof a];
      const valB = b[sort as keyof typeof b];

      if (valA < valB) return order === 'asc' ? -1 : 1;
      if (valA > valB) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

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