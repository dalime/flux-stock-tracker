const express = require('express');
const router = express.Router();

router.use('/details', require('./details'));
router.use('/lookups', require('./lookups'));

module.exports = router;
