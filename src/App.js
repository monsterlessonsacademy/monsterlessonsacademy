import { useState } from "react";
import Board from "./components/Board";
import { generateBoard, addDefaultFigures } from "./helpers/board";
import { getDefaultFigures } from "./helpers/figures";

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const { grid, cells } = generateBoard();
  const figures = getDefaultFigures();
  console.log("cells", cells);
  console.log("grid", grid);
  console.log("figures", figures);
  return (
    <div className="app">
      <Board
        currentPlayer={currentPlayer}
        cells={cells}
        grid={grid}
        figures={figures}
      />
    </div>
  );
};

export default App;
