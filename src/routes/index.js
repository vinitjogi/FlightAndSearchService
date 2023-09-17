const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index');

router.use('/v1', v1ApiRoutes); // incoming requests starting with v1 will be redirected to v1ApiRoutes

module.exports = router;
