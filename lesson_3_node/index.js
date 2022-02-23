const path = require('path');
const  express = require('express')
const {engine} = require('express-handlebars')
const apiRouts = require('./Routrs/apiRoutres')

const index = express();
index.use(express.json());
index.use(express.urlencoded( { extended: true}));

index.use(express.static(path.join(__dirname, 'static')));
index.set('view engine', '.hbs');
index.engine('.hbs', engine( {defaultLayout: false}));
index.set('views', path.join(__dirname, 'static'));

index.use(apiRouts);

index.listen(5200, ()=> {
    console.log('Serves has started on PORT 5200')
})