const express = require("express");
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => { 
  res.json({ apiKey: `${process.env.API_KEY_RAWG}` });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
