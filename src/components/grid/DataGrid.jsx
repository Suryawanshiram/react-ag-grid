import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export default function DataGrid({ rowData, columnDefs }) {
  return (
    <div className="ag-theme-quartz w-full h-[65vh] max-w-7xl border rounded-lg overflow-hidden gap-4 flex flex-col">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 50, 100]}
        animateRows
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
          minWidth: 120,
        }}
      />
    </div>
  );
}
