import { useState, useEffect } from "react";

const SearchBar = ({ placeholder = "Search...", searchValue, callback }) => {
  const [innerValue, setInnerValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    callback(innerValue);
  };
  const clearSearch = () => {
    setInnerValue("");
    callback("");
  };

  useEffect(() => {
    setInnerValue(searchValue);
  }, [searchValue]);
  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input
        type="text"
        placeholder={placeholder}
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
      className="searchBarInput"
      />
      <div onClick={clearSearch} className="searchBarClear">
        &times;
      </div>
    </form>
  );
};
export default SearchBar;
