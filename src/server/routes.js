const express = require('express');
const router = express.Router();

const db = require('./db.js');


router.get('/', (req, res) => {
    db.getJobs(req.params)
      .then(value => res.json({value}))
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message);
      });
  });

  module.exports = router;