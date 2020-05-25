var express = require('express')
var router = express.Router();
var burger = require('../models/burger')

router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        var burgerObject = {
            burger: data
        };
        let newArr = burgerObject.burger.map(arr => console.log(arr[0]))
        console.log(burgerObject)
        res.render("index", burgerObject)
    })
})

module.exports = router;