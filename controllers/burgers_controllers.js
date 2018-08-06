var express = require("express");
var router = express.Router();

//Model for the burger...
var db = require("../models");

//Gets data from database...
router.get("/", function (req, res) {
    db.burgers.findAll({}).then(function (result) {
        res.render("index", { burger: result })
    })
});

//Creates...
router.post("/", function (req, res) {
    db.burgers.create({
        burger_name: req.body.burger_name
    }).then(function () {
        return res.redirect("/")
    })

});

//Updates...
router.put("/", function (req, res) {
    db.burgers.update(
        {
            is_devoured: true,
        },
        {
            where: {
                id: req.body.id
            }
        }).then(function(){
            return res.redirect("/")
        })
});

module.exports = router;