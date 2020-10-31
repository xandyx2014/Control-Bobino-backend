const express = require('express');
const router = express();
const testController = require('../controllers/test/index');

router.get('/', testController.test);

module.exports = router;