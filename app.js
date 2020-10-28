const express = require("express");
const path = require("path");

const Twitter = require("./utils/twitter");
const twitter = new Twitter();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/tweets", (req, res) => {
  const { q, count } = req.query;

  twitter
    .get(q, count)
    .then((response) => res.status(200).send(response.data))
    .catch((error) => res.status(400).send(error));
});

app.listen(port, () => console.log(`Server Started on port ${port}!`));
