const express = require("express");

const starWars = require("./routes/starwars");

const app = express();
const port = 3000;

app.use("/sw", starWars);
app.use(express.json());

//starter route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
