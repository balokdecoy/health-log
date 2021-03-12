require("dotenv").config();
const mysql = require("mysql");
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("./config/passport");

