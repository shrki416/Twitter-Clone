import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <input type="text" placeholder="Search Twitter" />
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
      <div className="next-page-container">
        <div id="next-page">
          <i className="fas fa-arrow-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Search;
