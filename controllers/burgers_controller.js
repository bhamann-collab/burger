var express = require('express')
var router = express.Router();
var burger = require('../models/burger')

router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        var burgerObject = {
            burger: data
        };
        res.render("index", burgerObject)
    })
})

//To add a new burger
router.post("/api/burger", (req, res) => {
    burger.insertOne([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId})
    })
    res.redirect('/')
})

//To update an existing burger
router.post("/api/burger-update", (req, res) => {
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