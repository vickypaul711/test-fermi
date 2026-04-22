import styles from './dataTable.module.css';

const data = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  { name: 'Alex Brown', email: 'alex@example.com', role: 'Editor', status: 'Active' },
  { name: 'Chris Green', email: 'chris@example.com', role: 'User', status: 'Active' },
  { name: 'Sam White', email: 'sam@example.com', role: 'Admin', status: 'Inactive' },
  { name: 'Mike Black', email: 'mike@example.com', role: 'User', status: 'Active' },
  { name: 'Sara Blue', email: 'sara@example.com', role: 'Editor', status: 'Active' },
  { name: 'Tom Gray', email: 'tom@example.com', role: 'User', status: 'Inactive' },
];

export default function DataTable() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name ↑</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td className={styles.stickyColumn}>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.role}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button>Previous</button>
        <span>1 2 3</span>
        <button>Next</button>
      </div>
    </div>
  );
}