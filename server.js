require("dotenv").config();
const mysql = require("mysql");
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("./config/passport");

const app = express();
connection; 
if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "healthLog",
    });
};

const PORT = process.env.PORT || 8080;

const db = require("./models");
// const expbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.engine(
//     "handlebars",
//     expbs({
//         defaultLayout: "main",
//         layoutsDir: path.join(_dirname, "views/layouts"),
//     })
// );

// app.set("view engine", "handlebars");

app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Connection successful. Listening on PORT ${PORT}`))
})