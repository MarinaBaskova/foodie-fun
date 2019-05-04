// require 3rd party mw
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

// export a function that takes in a server which uses all the mw
module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(morgan("dev"));
};
