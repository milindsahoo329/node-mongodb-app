const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.role = require("./role");
db.agency = require("./agency");
db.client = require("./client");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;