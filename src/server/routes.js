const express = require("express");

const router = express.Router();

const db = require("./db.js");

router.get("/", (req, res) => {
  db.getJobs(req.params)
    .then(value => res.json({ value }))
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});
router.get('*', function(req, res) {
    res.redirect('/');
});  // trying to redirect any route not definded to go back home.

module.exports = router;
