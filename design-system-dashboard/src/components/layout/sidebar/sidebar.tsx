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
        <div className={styles.item}>Dashboard</div>
        <div className={styles.item}>Analytics</div>
        <div className={styles.item}>Users</div>
      </nav>
    </aside>
  );
}