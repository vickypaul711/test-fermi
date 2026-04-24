import DashboardLayout from '@/components/layout/dashboardLayout/dashboardLayout';
import DataTable from '@/components/dashboard/dataTable/dataTable';
import styles from './page.module.css';
import { Suspense } from 'react';

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className={styles.header}>
        <h1 className={styles.title}>Users</h1>
        <p className={styles.subtitle}>
          Manage and explore user data
        </p>
      </div>

      <div className={styles.tableSection}>
        <Suspense fallback={<div>Loading table...</div>}>
          <DataTable />
        </Suspense>
      </div>
    </DashboardLayout>
  );
}