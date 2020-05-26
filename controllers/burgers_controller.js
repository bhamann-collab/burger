var express = require('express')
var router = express.Router();
var burger = require('../models/burger')

router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject)
        res.render("index", burgerObject)
    })
})

router.post("/api/burger", (req, res) => {
    console.log(req.body)
    burger.insertOne([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId})
    })
    res.redirect('/')
})

router.post("/api/burger-update", (req, res) => {
    console.log(req.body)
    burger.updateOne([
        "currentName", "name", "devoured"
    ], [
        req.body.currentName - (-1), req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId})
    })
    res.redirect('/')
})

module.exports = router;