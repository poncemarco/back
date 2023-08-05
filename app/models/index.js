const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");


mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// db.client = require("./clients.model")(mongoose);
// db.visit = require("./visit.model")(mongoose);
module.exports = db; 