import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Tweet from "./Tweet";

function Search() {
  const [input, setInput] = useState("");
  const [tweet, setTweet] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .get(`/tweets?q=${input}`)
      .then((response) => setTweet(response.data))
      .catch((error) => console.error(error));
  };
  console.log(tweet);
  const tweets = tweet.statuses || [];
  const tweetCard = tweets.map((tweet) => <Tweet name={tweet.user.name} />);

  return (
    <>
      <div className="search">
        <form onSubmit={handleSubmit}>
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
        <div className="search__tweet">{tweetCard}</div>
      </div>
    </>
  );
}

export default Search;
