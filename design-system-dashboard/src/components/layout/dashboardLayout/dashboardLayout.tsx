'use client';

import styles from './dashboardLayout.module.css';
import Sidebar from '../sidebar/sidebar';
import TopNav from '../topNav/topNav';
import { useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar collapsed={collapsed} />

      <div className={styles.main}>
        <TopNav onToggleSidebar={() => setCollapsed(!collapsed)} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}