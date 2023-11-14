import React, { useState } from "react";

const Filter = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          onSearchChange(e.target.value);
        }}
      />
      <select name="filter">
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

export default Filter;