import { useState } from "react";

const SearchBar = ({ placeholder = "Search...", callback }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    callback(searchValue);
  };
  const clearSearch = () => {
    setSearchValue("");
    callback("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div onClick={clearSearch}>X</div>
    </form>
  );
};
export default SearchBar;
