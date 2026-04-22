import styles from './card.module.css';
import clsx from 'clsx';

type CardVariant = 'default' | 'elevated';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
}

export default function Card({ children, variant = 'default' }: CardProps) {
  return (
    <div className={clsx(styles.card, styles[variant])}>
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className={styles.header}>{children}</div>;
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className={styles.body}>{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className={styles.footer}>{children}</div>;
}