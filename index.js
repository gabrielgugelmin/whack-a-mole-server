const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

let records = [];

app.get("/records", (req, res) => {
  const orderedRecords = records.sort((a, b) => b.score - a.score).slice(0, 10);
  res.json(orderedRecords);
});

app.post("/record", (req, res) => {
  const { playerName, score } = req.body;

  if ((playerName, score <= 0))
    return res
      .status(400)
      .json({ message: "Player name or score values are invalid" });

  const newRecord = {
    playerName: req.body.playerName,
    score: req.body.score,
  };

  records.push(newRecord);

  res.status(204).json();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
