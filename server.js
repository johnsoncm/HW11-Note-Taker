const express = require('express');
//import api routes and html routes
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'))

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT , () => console.log(`App listening on PORT ${PORT}`));








