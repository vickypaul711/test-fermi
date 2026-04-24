import Button from '@/components/ui/button/button';
import styles from './topNav.module.css';
import ThemeToggle from '@/components/ui/themeToggle';

export default function TopNav({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  return (
    <header className={styles.topnav}>
      <Button variant="secondary" size="small" onClick={onToggleSidebar}>☰</Button>

      <div className={styles.center}>Dashboard</div>

      <div className={styles.right}>
        <ThemeToggle />
        <div className={styles.avatar}>U</div>
      </div>
    </header>
  );
}