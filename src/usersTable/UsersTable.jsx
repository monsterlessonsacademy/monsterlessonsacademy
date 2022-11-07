import "./usersTable.css";
import { useEffect, useState } from "react";

const HeaderCell = ({ column, sorting, sortTable }) => {
  const name = column.charAt(0).toUpperCase() + column.substring(1);
  const isDescSorting = sorting.column === column && sorting.order === "desc";
  const isAscSorting = sorting.column === column && sorting.order === "asc";
  const futureSortingOrder = isDescSorting ? "asc" : "desc";
  return (
    <th
      key={column}
      className="users-table-cell"
      onClick={() => sortTable({ column, order: futureSortingOrder })}
    >
      {name}
      {isDescSorting && <span>▼</span>}
      {isAscSorting && <span>▲</span>}
    </th>
  );
};

const Header = ({ columns, sorting, sortTable }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <HeaderCell
            key={column}
            column={column}
            sorting={sorting}
            sortTable={sortTable}
          />
        ))}
      </tr>
    </thead>
  );
};

const Content = ({ entries, columns }) => {
  return (
    <tbody>
      {entries.map((entry) => (
        <tr key={entry.id}>
          {columns.map((column) => (
            <td key={column} className="users-table-cell">
              {entry[column]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const SearchBar = ({ searchTable }) => {
  const [searchValue, setSearchValue] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    searchTable(searchValue);
  };
  return (
    <div className="search-bar">
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
};

const UsersTable = () => {
  const columns = ["id", "name", "age"];
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState({ column: "id", order: "asc" });
  const [searchName, setSearchName] = useState("");
  const sortTable = (newSorting) => {
    setSorting(newSorting);
  };
  const searchTable = (searchValue) => {
    setSearchName(searchValue);
  };
  useEffect(() => {
    const url = `http://localhost:3004/users?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchName}`;
    fetch(url)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, [sorting, searchName]);
  return (
    <div>
      <SearchBar searchTable={searchTable} />
      <table className="users-table">
        <Header columns={columns} sortTable={sortTable} sorting={sorting} />
        <Content entries={users} columns={columns} />
      </table>
    </div>
  );
};

export default UsersTable;
