"use strict";
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

//라우팅
const home = require("./src/routes/home");

// 앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened: true}));

app.use("/", home); //use-> 미들웨어 등록하는 메서드

module.exports = app;
