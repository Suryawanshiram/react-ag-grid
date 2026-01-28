export const columnDefs = [
  {
    headerName: "ID",
    field: "id",
    width: 80,
    pinned: "left",
  },
  {
    headerName: "Name",
    minWidth: 180,
    pinned: "left",
    valueGetter: (p) =>
      p?.data ? `${p.data.firstName} ${p.data.lastName}` : "",
    tooltipValueGetter: (p) =>
      p?.data ? `${p.data.firstName} ${p.data.lastName}` : "",
  },
  {
    headerName: "Department",
    field: "department",
    minWidth: 140,
    filter: true,
  },
  {
    headerName: "Position",
    field: "position",
    minWidth: 160,
  },
  {
    headerName: "Location",
    field: "location",
    minWidth: 120,
  },
  {
    headerName: "Salary",
    field: "salary",
    minWidth: 130,
    type: "numericColumn",
    filter: true,
    headerClass: "salary-header-left",
    cellClass: "text-left",
    valueFormatter: ({ value }) =>
      value != null ? value.toLocaleString("en-IN") : "—",
  },
  {
    headerName: "Rating",
    field: "performanceRating",
    width: 110,
    cellRenderer: ({ value }) => {
      if (value == null) return "—";

      const color =
        value >= 4
          ? "text-green-600"
          : value >= 3
            ? "text-yellow-600"
            : "text-red-600";

      return <span className={`font-semibold ${color}`}>{value}</span>;
    },
  },
  {
    headerName: "Status",
    field: "isActive",
    minWidth: 120,
    cellRenderer: ({ value }) => (
      <span
        className={
          value
            ? "px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700"
            : "px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700"
        }
      >
        {value ? "Active" : "Inactive"}
      </span>
    ),
  },
];
