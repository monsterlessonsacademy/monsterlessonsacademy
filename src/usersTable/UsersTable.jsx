import { useState, useEffect } from "react";
import "./usersTable.css";

const HeaderCell = ({ column, sorting, sortTable }) => {
  const isDescSorting =
    sorting.column === column && sorting.direction === "desc";
  const isAscSorting = sorting.column === column && sorting.direction === "asc";
  const futureSortingOrder = isDescSorting ? "asc" : "desc";
  return (
    <th
      className="users-table-cell"
      onClick={() => sortTable({ column, direction: futureSortingOrder })}
    >
      {column}
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
            column={column}
            key={column}
            sorting={sorting}
            sortTable={sortTable}
          />
        ))}
      </tr>
    </thead>
  );
};

const Content = ({ users, columns }) => {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          {columns.map((column) => (
            <td key={column} className="users-table-cell">
              {user[column]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const SearchBar = ({ searchTable }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
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
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState({ column: "id", direction: "asc" });
  const [searchValue, setSearchValue] = useState("");
  const columns = ["id", "name", "age"];
  const sortTable = (newSorting) => {
    setSorting(newSorting);
  };
  const searchTable = (newSearchValue) => {
    setSearchValue(newSearchValue);
  };

  useEffect(() => {
    const url = `http://localhost:3004/users?_sort=${sorting.column}&_order=${sorting.direction}&name_like=${searchValue}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [sorting, searchValue]);

  return (
    <div>
      <SearchBar searchTable={searchTable} />
      <table className="users-table">
        <Header columns={columns} sorting={sorting} sortTable={sortTable} />
        <Content users={users} columns={columns} />
      </table>
    </div>
  );
};

export default UsersTable;
