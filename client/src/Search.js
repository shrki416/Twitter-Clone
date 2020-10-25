import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(e.target.value);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__input">
        <input
          type="text"
          placeholder="Search Twitter"
          onChange={handleChange}
        />
        <SearchIcon fontSize="large" />
      </div>

      <div>
        <div className="search__welcome-message">
          <h4>Welcome to Twitter!</h4>
          <h5>
            Use the search above to see what's happening around the world.
          </h5>
        </div>
      </div>
      <div className="search__next-page">
        <i className="fas fa-arrow-down"></i>
      </div>
    </form>
  );
}

export default Search;
