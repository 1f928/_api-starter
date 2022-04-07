
const express = require('express');

const nodeRouter = require('./node');
const linkRouter = require('./link');
const userRouter = require('./user');

const router = express.Router();

router.use('/node', wrapRoute(nodeRouter));
router.use('/link', wrapRoute(linkRouter));
router.use('/user', wrapRoute(userRouter));

function wrapRoute(router) {
  return router
}

module.exports = router;
