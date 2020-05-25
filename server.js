var express = require("express");
const router = require("./controllers/burgers_controller");
const exphbs = require('express-handlebars');
const path = require('path')
const bodyParser = require('body-parser')

var PORT = process.env.PORT || 8080

var app = express()


// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

// Middleware
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true})) 

//Routes
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost: ${PORT}`)
})