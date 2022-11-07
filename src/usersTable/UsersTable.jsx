const Header = () => {
  const headerCells = [
    {
      id: "id",
      name: "Id",
    },
    {
      id: "name",
      name: "Name",
    },
  ];
  return (
    <thead>
      <tr>
        {headerCells.map((headerCell) => (
          <th key={headerCell.id}>{headerCell.name}</th>
        ))}
      </tr>
    </thead>
  );
};

const Content = ({ entries }) => {
  return (
    <tbody>
      {entries.map((entry) => (
        <tr key={entry.id}>
          <td>{entry.id}</td>
          <td>{entry.name}</td>
        </tr>
      ))}
    </tbody>
  );
};

const UsersTable = () => {
  const entries = [
    { id: "1", name: "John" },
    { id: "2", name: "Jack" },
    { id: "3", name: "Mike" },
  ];
  return (
    <div>
      <table>
        <Header />
        <Content entries={entries} />
      </table>
    </div>
  );
};

export default UsersTable;
