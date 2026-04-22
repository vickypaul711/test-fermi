'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './dataTable.module.css';

export default function DataTable() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get('page') || 1);
  const search = searchParams.get('search') || '';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState(search);

  function updateQuery(params: Record<string, string | number>) {
    const newParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      newParams.set(key, String(value));
    });

    router.push(`?${newParams.toString()}`);
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const res = await fetch(
        `/api/users?page=${page}&search=${search}`
      );

      const json = await res.json();
      setData(json.data);
      setLoading(false);
    }

    fetchData();
  }, [page, search]);

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
        <tbody>
          {loading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td>No results</td>
            </tr>
          ) : (
            data.map((row: any) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <button onClick={() => updateQuery({ page: page - 1 })}>
        Prev
      </button>
      <button onClick={() => updateQuery({ page: page + 1 })}>
        Next
      </button>
    </div>
  );
}