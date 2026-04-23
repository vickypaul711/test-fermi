import Link from 'next/link';
import styles from './sidebar.module.css';
import clsx from 'clsx';

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  return (
    <aside
      className={clsx(styles.sidebar, {
        [styles.collapsed]: collapsed,
      })}
    >
      <div className={styles.logo}>App</div>

      <nav className={styles.nav}>
        <Link href="/dashboard" className={styles.item}>
          <span>Dashboard</span>
        </Link>
        <Link href="/analytics" className={styles.item}>
          <span>Analytics</span>
        </Link>
        <Link href="/users" className={styles.item}>
          <span>Users</span>
        </Link>
      </nav>
    </aside>
  );
}