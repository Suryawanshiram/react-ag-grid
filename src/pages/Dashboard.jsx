import { employees } from "../data/sampleData";
import { columnDefs } from "../components/grid/columnDefs";
import DataGrid from "../components/grid/DataGrid";
import ErrorBoundary from "../components/error/ErrorBoundary";
import Navbar from "../components/layout/Navbar";

const employeeData = employees.employees;

export default function Dashboard() {
  console.log(Array.isArray(employeeData)); // true

  return (
    <div className="p-4 gap-4 space-y-6 max-w-7xl mx-auto w-full h-full min-h-screen ">
      <div className="bg-slate-900 rounded-xl shadow-lg p-4">
        <Navbar />

        <div className="border-b border-white/10 mb-3" />

        <ErrorBoundary fallback={<div>Grid failed to load...</div>}>
          <DataGrid rowData={employeeData} columnDefs={columnDefs} />
        </ErrorBoundary>
      </div>
    </div>
  );
}
