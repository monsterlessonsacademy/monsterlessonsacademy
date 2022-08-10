export const generateBoard = () => {
  const grid = [];
  const cells = {};
  let id = 0;
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      row.push(id);
      cells[id] = {
        cellColor: (i + j) % 2 !== 0 ? "black" : "white",
        cellId: id,
      };
      id++;
    }
    grid.push(row);
  }

  return { grid, cells };
};
