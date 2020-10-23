const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/tweets", (req, res) => {
  console.log(req.query);
  const query = req.query.q;
  const count = req.query.count;

  const url = "https://api.twitter.com/1.1/search/tweets.json";

  axios
    .get(url, {
      params: {
        q: query,
        count: count,
      },
      headers: {
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAHqrBAEAAAAAwtYvM4cQArbpAf1do%2Be3fU4K5ro%3DVEQspKvlKzpeqKk5T5XXQ2wJOMPOSBKomzK3TXsfGwLcQBGxui",
      },
    })
    .then((response) => res.status(200).send(response.data))
    .catch((error) => res.status(400).send(error));
});

app.listen(port, () => console.log(`Server Started on port ${port}!`));
