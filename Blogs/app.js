const express = require('express');
const bodyParser = require('body-parser');
let alert = require('alert');

const path = require('path');
const blogRoutes = require('./routes/blog');

const app = express();

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true })); //it will parse the request body

app.use(express.static(path.join(__dirname, 'public')));

app.use(blogRoutes);

app.listen(4444,()=>{
    console.log("server started at http://localhost:4444");
});
