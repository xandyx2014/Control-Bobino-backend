const express = require('express');
const router = express();
const userCtrl = require('../controllers/user.controller');

router.post('/auth', userCtrl.auth);
router.post('/login', userCtrl.login);

module.exports = router;