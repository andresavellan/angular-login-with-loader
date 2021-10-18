const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
  })
);

app.post("/users", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  const userRegistered = req.body;
  res.status(200).send(userRegistered);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
