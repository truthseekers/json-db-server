const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const data = require("./data.json");
const server = http.createServer(app);
const fs = require("fs");

const port = process.env.PORT || 3001;
require("dotenv").config();

console.log("our json db has this: ", data);

app.use(
  cors({
    origin: [process.env.ORIGIN],
  })
);

const newData = [
  {
    id: 123,
    title: "bowl",
  },
];

app.get("/products", async (req, res, next) => {
  console.log("Hellooo from products");

  fs.writeFile("data.json", JSON.stringify(newData), (err) => {
    if (err) throw err;
    console.log("done writing....");
  });
  res.send(data);
});

server.listen(port, () => console.log("Listening on port 3001"));
