import React from "react";
import "../CSS/search.css";

function Search({SearchValue, setSearchValue}) {
  const onSearchValue = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className="container-search">
      <input
        type="text"
        placeholder="busca una tarea"
        className="search"
        onChange={onSearchValue}
        value={SearchValue}
      />
    </div>
  );
}

export default Search;
