// dependencies
let express = require("express");
let burger = require("../models/burger");
let router = express.Router();

// creating routes and setting up logig
router.get("/", function (req, res) {
    burger.selectALL(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured], function (result) {
            res.json({ id: result.insertID });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {

                return res.status(404).end();
            }
        }
    );
});

module.exports = router;