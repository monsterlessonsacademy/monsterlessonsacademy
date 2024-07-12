import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";
import { UserInterface } from "./user.interface";
import { ColDef } from "ag-grid-community";

const UsersGrid = () => {
  const [rowData, setRowData] = useState<UserInterface[]>([]);

  const fieldName = (name: keyof UserInterface) => name;
  const colDefs: ColDef[] = [
    {
      headerName: "ID",
      field: fieldName("id"),
      width: 80,
    },
    {
      headerName: "Name",
      field: fieldName("name"),
    },
    {
      headerName: "Company",
      field: fieldName("company"),
    },
    {
      headerName: "Country",
      field: fieldName("country"),
    },
    {
      headerName: "Mobile",
      field: fieldName("mobile"),
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  });

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact
        defaultColDef={{
          sortable: true,
        }}
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
};

export default UsersGrid;
