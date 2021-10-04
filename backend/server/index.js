const express = require("express");
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => { 
  res.json({ apiUrl: `${process.env.API_URL}` });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


