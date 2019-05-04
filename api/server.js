const express = require("express");

const server = express();
const serverConfig = require("./serverConfig");

const usersRoute = require("../routes/usersRoute");
const postsRoute = require("../routes/postsRoute");
const dishesRoute = require("../routes/dishesRoute");
const restaurantsRoute = require("../routes/restaurantsRoute");
serverConfig(server);
server.use("/restaurants", restaurantsRoute);
server.use("/dishes", dishesRoute);
server.use("/users", usersRoute);
server.use("/posts", postsRoute);
module.exports = server;
