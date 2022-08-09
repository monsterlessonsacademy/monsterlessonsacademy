import { useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const cells = generateCells()
  return (
    <div className="app">
      <Board currentPlayer={currentPlayer} />
    </div>
  );
};

export default App;
