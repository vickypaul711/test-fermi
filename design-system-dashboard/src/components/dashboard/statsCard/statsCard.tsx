import Card, { CardBody } from '@/components/ui/card/card';
import styles from './statsCard.module.css';
import clsx from 'clsx';

interface StatsCardProps {
  title: string;
  value: string;
  change: number; // positive or negative
}

export default function StatsCard({ title, value, change }: StatsCardProps) {
  const isPositive = change >= 0;

  return (
    <Card variant="elevated">
      <CardBody>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.icon}>📊</div>
            <div>
              <div className={styles.title}>{title}</div>
              <div className={styles.value}>{value}</div>
            </div>
          </div>

          <div
            className={clsx(styles.change, {
              [styles.positive]: isPositive,
              [styles.negative]: !isPositive,
            })}
          >
            {isPositive ? '▲' : '▼'} {Math.abs(change)}%
          </div>
        </div>
      </CardBody>
    </Card>
  );
}