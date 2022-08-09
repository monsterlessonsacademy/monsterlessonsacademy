import { useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState("white");
  return (
    <div className="app">
      <Board currentPlayer={currentPlayer} />
    </div>
  );
};

export default App;
