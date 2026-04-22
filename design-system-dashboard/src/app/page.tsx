import StatsCard from "@/components/dashboard/statsCard/statsCard";
import DashboardLayout from "@/components/layout/dashboardLayout/dashboardLayout";
import styles from './page.module.css';
import DataTable from "@/components/dashboard/dataTable/dataTable";

export default function Home() {

  return (
    <DashboardLayout>
      <div className={styles.grid}>
        <StatsCard title="Revenue" value="$12,340" change={12} />
        <StatsCard title="Users" value="1,230" change={-5} />
        <StatsCard title="Orders" value="320" change={8} />
        <StatsCard title="Conversion" value="3.2%" change={2} />
      </div>
      <DataTable />
    </DashboardLayout>
  );
}