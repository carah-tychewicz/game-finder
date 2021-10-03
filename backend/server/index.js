const express = require("express");
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/games", (req, res) => { 
  
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


