import styles from './tableSkeleton.module.css';

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

export default function TableSkeleton({
  rows = 8,
  columns = 6,
}: TableSkeletonProps) {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={i}>
          {Array.from({ length: columns }).map((_, j) => (
            <td key={j}>
              <div className={styles.skeleton} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}