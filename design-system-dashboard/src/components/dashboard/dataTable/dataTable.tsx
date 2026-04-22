'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './dataTable.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
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
  const [searchInput, setSearchInput] = useState(search);
  const [totalPages, setTotalPages] = useState(1);

  function updateQuery(params: Record<string, string | number>) {
    const newParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      newParams.set(key, String(value));
    });

    router.push(`?${newParams.toString()}`);
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
      setLoading(true);

      const res = await fetch(
        `/api/users?page=${page}&search=${search}&sort=${sort}&order=${order}`
      );

      const json = await res.json();

      setData(json.data);
      setTotalPages(json.meta?.totalPages || 1);

      setLoading(false);
    }

    fetchData();
  }, [page, search, sort, order]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateQuery({ search: searchInput, page: 1 });
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  return (
    <div>
      <input
        placeholder="Search users..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Name {sort === 'name' ? (order === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th>Email</th>
            <th onClick={() => handleSort('role')}>
              Role {sort === 'role' ? (order === 'asc' ? '↑' : '↓') : ''}
            </th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3}>Loading...</td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={3}>No results found</td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={row.id}>
                <td className={styles.stickyColumn}>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.role}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div>
        <button
          disabled={page <= 1}
          onClick={() => updateQuery({ page: page - 1 })}
        >
          Prev
        </button>

        <span>
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page >= totalPages}
          onClick={() => updateQuery({ page: page + 1 })}
        >
          Next
        </button>
      </div>
    </div>
  );
}