const port = 3001;
const express = require("express");
const cors = require("cors");
const app = express();
const Woolworths = require("./woolworths.js");
const Coles = require("./coles");

app.use(express.static("static"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.get("/", (req, res) => {
  res.send("shoppinglist backend api. See /items for database");
});

app.get("/items", (req, res) => {
  console.log(req.ip);
  res.send([Woolworths, Coles]);
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
