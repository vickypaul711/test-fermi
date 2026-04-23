import StatsCard from '@/components/dashboard/statsCard/statsCard';
import DashboardLayout from '@/components/layout/dashboardLayout/dashboardLayout';
import styles from './page.module.css';
import AnalyticsCard from '@/components/dashboard/analyticsCard/analyticsCard';

async function getStats() {
  const res = await fetch('http://localhost:3000/api/stats', {
    cache: 'no-store',
  });

  return res.json();
}

async function getAnalytics() {
  const res = await fetch('http://localhost:3000/api/analytics', {
    cache: 'no-store',
  });

  return res.json();
}

export default async function DashboardPage() {
  const { data } = await getStats();
  const { data: analyticsData } = await getAnalytics();

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

      <div className={styles.section}>
        <AnalyticsCard data={analyticsData} />
      </div>
    </DashboardLayout>
  );
}