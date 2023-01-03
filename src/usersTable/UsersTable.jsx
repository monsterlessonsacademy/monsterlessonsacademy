import { useState, useEffect } from "react";
import "./usersTable.css";

const HeaderCell = ({ column, sorting, sortTable }) => {
  const isDescSorting =
    sorting.column === column && sorting.direction === "desc";
  const isAscSorting = sorting.column === column && sorting.direction === "asc";
  const handleClick = () => {
    const newSorting = {
      column,
      direction: isDescSorting ? "asc" : "desc",
    };
    sortTable(newSorting);
  };
  return (
    <th className="users-table-cell" onClick={handleClick}>
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
          <HeaderCell column={column} sorting={sorting} sortTable={sortTable} />
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
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    searchTable(searchValue);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const columns = ["id", "name", "age"];
  const [sorting, setSorting] = useState({ column: "id", direction: "asc" });
  const [searchValue, setSearchValue] = useState("");
  const sortTable = (newSorting) => {
    setSorting(newSorting);
  };
  const searchTable = (newSearchValue) => {
    setSearchValue(newSearchValue);
  };

  useEffect(() => {
    fetch(
      `http://localhost:3004/users?_sort=${sorting.column}&_order=${sorting.direction}&name_like=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
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
