const module2 = require('/util/helper.js')
const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log (module2.Date)
});

module.exports = router;
// adding this comment for no reason
