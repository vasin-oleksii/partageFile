const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const start = async () => {
  try {
    await mongoose.connect(process.env.dbUrl);
    console.log(process.env.dbUrl);
    app.listen(PORT, () => {
      console.log(`Server on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();

const apiUrl = process.env.REACT_APP_API_URL;
