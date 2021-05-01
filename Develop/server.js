const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//import api routes and html routes
const htmlRoutes = require('../routes/htmlroutes.js');
const apiRoutes = require('..routes/apiroutes.js');

// use app.use for api and html routes???
// app.use(htmlRoutes)
// app.use(apiRoutes)

//use app.use(express.static'public')
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


app.listen(PORT , () => console.log(`App listening on PORT ${PORT}`));
