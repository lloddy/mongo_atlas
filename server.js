// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const PORT = process.env.PORT || 3000
// =======================================
//              DATABASE
// =======================================
const MONGODB_URI = process.env.MONGODB_URI;
db.on("error", (err) => console.log(err.message + "is mongod not running?"));
db.on("connected", () => console.log("mongod connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongod disconnected"));
// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
// =======================================
//              ROUTES
// =======================================

// INDEX
app.get("/", (req, res) => {
    res.send("Hello World!")
});
// NEW

// DElETE

// UPDATE

// CREATE

// EDIT

// SHOW

// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => console.log("express is running on:", PORT));