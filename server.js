// Requirements
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require("./config/connection");
const productRoutes = require("./routes/productRoutes");

// App Configuration
const app = express();
const PORT = process.env.PORT || 3001;
