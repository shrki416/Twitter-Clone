import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

function Search() {
  const [input, setInput] = useState("");
  const [tweet, setTweet] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`/tweets?q=${input}`)
      .then((response) => setTweet(response.data))
      .catch((error) => console.error(error));

    console.log(setTweet);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__input">
        <input
          type="text"
          placeholder="Search Twitter"
          onChange={(e) => setInput(e.target.value)}
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
