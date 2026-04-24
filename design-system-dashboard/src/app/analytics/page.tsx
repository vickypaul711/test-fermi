import DashboardLayout from '@/components/layout/dashboardLayout/dashboardLayout';
import AnalyticsCard from '@/components/dashboard/analyticsCard/analyticsCard';
import styles from './page.module.css';

interface AnalyticsItem {
  date: string;
  value: number;
}

async function getAnalytics(): Promise<{ data: AnalyticsItem[] }> {
  const res = await fetch('/api/analytics', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch analytics');
  }

  return res.json();
}

export default async function AnalyticsPage() {
  const { data } = await getAnalytics();

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const avg = Math.round(total / data.length);
  const max = Math.max(...data.map((d) => d.value));

  return (
    <DashboardLayout>
      <div className={styles.header}>
        <h1 className={styles.title}>Analytics</h1>
        <p className={styles.subtitle}>
          Track performance trends over time
        </p>
      </div>

      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <span>Total</span>
          <strong>{total}</strong>
        </div>
        <div className={styles.summaryItem}>
          <span>Average</span>
          <strong>{avg}</strong>
        </div>
        <div className={styles.summaryItem}>
          <span>Peak</span>
          <strong>{max}</strong>
        </div>
      </div>

      <div className={styles.section}>
        <AnalyticsCard data={data} />
      </div>
    </DashboardLayout>
  );
}