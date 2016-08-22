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

getLookups = function(id, cb) {
  request(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=${id}`, (err, response, body) => {
    console.log ('body:', body);
    let arrBody = JSON.parse(body);
    let newBody = [];
    let newArr = arrBody.map(body => {
      newBody.push(body.Symbol);
    })
    if (!err && response.statusCode == 200)  {
      console.log(newBody);
    }
    cb(null, newBody);
  })
}

module.exports = router;
