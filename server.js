const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app
  .get("/api/comic/latest", (req, response) => {
    let data;
    // console.log("get triggered");
    axios
      .get("http://xkcd.com/info.0.json")
      .then(res => {
        response.send(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
        response.status(400).send({});
      });
  })
  .get("/api/comic/:comicId", (req, response) => {
    let data;
    axios
      .get(`http://xkcd.com/${req.params.comicId}/info.0.json`)
      .then(res => {
        response.send(res.data);
      })
      .catch(err => {
        console.log(err);
        response.status(400).send({});
      });
  });

// deployment to Heroku
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.join("public", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
