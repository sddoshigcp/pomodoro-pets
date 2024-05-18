const express = require("express");

const apiRouter = express.Router();

const db = require("./database/DBConnection");

apiRouter.get("/mock", (req, res) => {
    db.query("SELECT * FROM mock")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status;
            res.send(err);
        });
});


module.exports = apiRouter;