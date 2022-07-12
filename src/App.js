import { useState } from "react";
import Pagination from "./Pagination";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="container">
      <Pagination
        currentPage={currentPage}
        total={500}
        limit={20}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default App;
