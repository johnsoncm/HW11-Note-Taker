const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
const PORT = 3000;

//import api routes and html routes
const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes = require('./routes/apiroutes');
const { response } = require('express');

// require('./routes/htmlroutes')(app);
// require('./routes/apiroutes')(app);

// Set up express app to parse data
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// app.use(express.static('/public'));

app.use(apiRoutes)
app.use(htmlRoutes)

//set up routes

// app.get('/api/notes', (req, res) => response.json("response from server"));

app.listen(PORT , () => console.log(`App listening on PORT ${PORT}`));
