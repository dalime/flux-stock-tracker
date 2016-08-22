const express = require('express');
const router = express.Router();
const request = require('request');

//const Lookup = require('../models/lookup');

router.route('/:text')
  .get((req, res) => {
    getLookups(req.params.text, (err, lookup) => {
      res.status(err ? 400 : 200).send(err || lookup);
    });
  });

getDetails = function(symbol, cb) {
  request(`http://dev.markitondemand.com/Api/v2/Quote?symbol=${symbol}`, (err, response, body) => {
    // let arrBody = JSON.parse(body);
    // let newBody = [];
    // let newArr = arrBody.map(body => {
    //   newBody.push(body.Symbol);
    // })
    // if (!err && response.statusCode == 200)  {
    // }
    cb(null, body);
  })
}

module.exports = router;
