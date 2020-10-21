import React from "react";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <div className="search">
      <div className="search__container">
        <input
          className="search__container-input"
          type="text"
          placeholder="Search Twitter"
        />
        <SearchIcon />
      </div>
      <div class="tweets-list">
        <div class="tweets-welcome-message">
          <h5>Welcome to Twitter!</h5>
          <p>Use the search above to see what's happening around the world.</p>
        </div>
      </div>
      <div class="next-page-container">
        <div id="next-page" onclick="onNextPage()">
          <i class="fas fa-arrow-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Search;
