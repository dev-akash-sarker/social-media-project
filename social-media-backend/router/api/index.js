const express = require("express");
const _ = express.Router();
const auth = require("./auth");
const registrationController = require("../../controllers/registrationController");
_.use("/auth", auth);
_.post("/auth", registrationController);

module.exports = _;
