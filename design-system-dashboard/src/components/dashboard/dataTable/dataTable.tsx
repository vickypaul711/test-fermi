'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './dataTable.module.css';
import { useDebounce } from '@/lib/hooks/useDebounce';
import TableSkeleton from './skeleton/skeleton';
import Button from '@/components/ui/button/button';
import Input from '@/components/ui/input/input';

interface User {
  status: 'Active' | 'Inactive';
  createdAt: string;
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User';
}

export default function DataTable() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get('page') || 1);
  const search = searchParams.get('search') || '';
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || 'asc';

  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchInput, setSearchInput] = useState(search);
  const [totalPages, setTotalPages] = useState(1);

  const debouncedSearch = useDebounce(searchInput, 300);

  function updateQuery(params: Record<string, string | number>) {
    const newParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      newParams.set(key, String(value));
    });

    router.replace(`?${newParams.toString()}`);
  }

  function handleSort(column: string) {
    let newOrder = 'asc';

    if (sort === column && order === 'asc') {
      newOrder = 'desc';
    }

    updateQuery({
      sort: column,
      order: newOrder,
      page: 1,
    });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError('');

        const res = await fetch(
          `/api/users?page=${page}&search=${search}&sort=${sort}&order=${order}`
        );

        if (!res.ok) throw new Error('Failed to fetch users');

        const json = await res.json();

        setData(json.data);
        setTotalPages(json.meta?.totalPages || 1);
      } catch (err) {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page, search, sort, order]);

  useEffect(() => {
    updateQuery({ search: debouncedSearch, page: 1 });
  }, [debouncedSearch]);

  return (
    <div>
      <Input
        id="search-users"
        value={searchInput}
        label='Search users...'
        prefix="user:"
        maxLength={10}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className={styles.wrapper}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Id</th>
                <th onClick={() => handleSort('name')}>
                  Name {sort === 'name' ? (order === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th>Email</th>
                <th onClick={() => handleSort('role')}>
                  Role {sort === 'role' ? (order === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th>
                  Status
                </th>
                <th>
                  CreatedAt
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <TableSkeleton />
              ) : error ? (
                <tr>
                  <td colSpan={3}>{error}</td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td className={styles.noResults} colSpan={99}>
                    No users found for "<strong>{search}</strong>"
                  </td>
                </tr>
              ) : (
                data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.role}</td>
                    <td>{row.status}</td>
                    <td>{row.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.pagination}>
        <Button
          disabled={page <= 1 || loading}
          onClick={() => updateQuery({ page: page - 1 })}
          loading={loading}
        >
          Prev
        </Button>

        <span>
          Page {page} / {totalPages}
        </span>

        <Button
          disabled={page >= totalPages || loading}
          onClick={() => updateQuery({ page: page + 1 })}
          loading={loading}
        >
          Next
        </Button>
      </div>
    </div>
  );
}