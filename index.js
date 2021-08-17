const express = require('express');
const http = require('http');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const rout = require('./routes');

app.use(rout);

http.createServer(app).listen(3001);