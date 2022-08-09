import { useState } from "react";
import Board from "./components/Board";
import { generateBoard, addDefaultFigures } from "./helpers/board";

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const { grid, cells } = generateBoard();
  const cellsWithDefaultFigures = addDefaultFigures(cells);
  console.log("cells", cellsWithDefaultFigures);
  console.log("grid", grid);
  return (
    <div className="app">
      <Board
        currentPlayer={currentPlayer}
        cells={cellsWithDefaultFigures}
        grid={grid}
      />
    </div>
  );
};

export default App;
