const express = require("express");
const fs = require("fs");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("./public"));

//setting up a route to handle any article
app.get("/article/:id", (req, res) => {
  console.log("Params object:", req.params)
  res.sendFile(__dirname + "/public/article.html");
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
