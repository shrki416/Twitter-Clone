const axios = require("axios");
require("dotenv").config();

const URL = "https://api.twitter.com/1.1/search/tweets.json";

class Twitter {
  get(q, count) {
    return axios.get(URL, {
      params: { q, count },
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_BEARER_TOKEN}`,
      },
    });
  }
}

module.exports = Twitter;
