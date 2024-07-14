import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";
import { UserInterface } from "./user.interface";
import { ColDef } from "ag-grid-community";

const CountryFormatter = (props: CustomCellRendererProps) => {
  return (
    <span>
      <i className={`fi fi-${props.value.flag}`}></i> {props.value.name}
    </span>
  );
};

const UsersGrid = () => {
  const [rowData, setRowData] = useState<UserInterface[]>([]);

  const [colDefs] = useState<ColDef<UserInterface>[]>([
    { field: "id" },
    { field: "name", filter: true },
    { field: "company", filter: true },
    {
      field: "country",
      cellRenderer: CountryFormatter,
      cellDataType: false,
      comparator: (a, b) => (a.name < b.name ? -1 : 1),
      filter: true,
      filterParams: {
        filterOptions: ["contains"],
        textMatcher: (props: any) => {
          return props.data.country.name
            .toLowerCase()
            .includes(props.filterText);
        },
        trimInput: true,
      },
    },
    { field: "mobile", filter: true },
  ]);

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default UsersGrid;
