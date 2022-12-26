const express = require('express');
const app = express();
const expressEjsLayout = require('express-ejs-layouts')

app.use(express.urlencoded({extended : false}));
    
//Routes
app.use('/', require('./routes/index'));
