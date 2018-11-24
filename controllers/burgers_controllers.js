    var express = require("express");

    var burger = require("../models/burger.js");

    var router = express.Router();

    var Sequelize = require("sequelize");

    var app = express();

    var db = require("../models/index");

    router.get("/", function (req, res) {
        db.burgers.findAll({})
            .then(function (data) {
                res.json(data)
            });
    });


    router.post("/api/burgers", function (req, res) {
        burger.create([
            "burger_name"
        ], [
            req.body.name
        ], function (result) {
            res.json({
                id: result.insertId
            });
        });
    });

    router.put("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log(req.body);

        burger.update({
            devoured: true
        }, condition, function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

module.exports = router;