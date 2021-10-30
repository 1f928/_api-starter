
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Example route response!');
});

module.exports = router;
