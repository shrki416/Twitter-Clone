import React, { useState } from "react";
import Tweet from "./Tweet";
import axios from "axios";

function Main() {
  const [input, setInput] = useState("");
  const [tweet, setTweet] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .get(`/tweets?q=${input}`)
      .then((response) => setTweet(response.data))
      .catch((error) => console.error(error));
  };

  const tweets = tweet.statuses || [];
  const tweetCard = tweets.map((tweet) => <Tweet name={tweet.user.name} />);

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Search Twitter"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div>
          <h4>Welcome to Twitter!</h4>
          <h5>
            Use the search above to see what's happening around the world.
          </h5>
        </div>
      </form>
      <div>{tweetCard}</div>
    </div>
  );
}

export default Main;
