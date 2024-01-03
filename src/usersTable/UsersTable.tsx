import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FormEvent, useEffect, useState } from "react";
import "./usersTable.css";

export type User = {
  id: number;
  name: string;
  age: number;
};

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.getValue(),
  }),
];

const UsersTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data: users,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });
  const submitSearchForm = (e: FormEvent) => {
    e.preventDefault();
    setSearchValue(inputSearchValue);
  };

  useEffect(() => {
    const order = sorting[0]?.desc ? "desc" : "asc";
    const sort = sorting[0]?.id ?? "id";
    const url = `http://localhost:3004/users?_sort=${sort}&_order=${order}&name_like=${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, [sorting, searchValue]);
  return (
    <div>
      <div className="search-bar">
        <form onSubmit={submitSearchForm}>
          <input
            type="text"
            placeholder="Search..."
            value={inputSearchValue}
            onChange={(e) => setInputSearchValue(e.target.value)}
          />
        </form>
      </div>
      <table className="users-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="users-table-cell">
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="users-table-cell">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
