import StatsCard from '@/components/dashboard/statsCard/statsCard';
import DashboardLayout from '@/components/layout/dashboardLayout/dashboardLayout';
import styles from './page.module.css';
import DataTable from '@/components/dashboard/dataTable/dataTable';
import { headers } from 'next/headers';

const headersList = await headers();
const host = headersList.get('host');

async function getStats() {
  const res = await fetch(`http://${host}/api/stats`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch stats');
  }

  return res.json();
}

export default async function Home() {
  const { data } = await getStats();

  return (
    <DashboardLayout>
      <div className={styles.grid}>
        {data.map((item: any, index: number) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
          />
        ))}
      </div>

      <DataTable />
    </DashboardLayout>
  );
}