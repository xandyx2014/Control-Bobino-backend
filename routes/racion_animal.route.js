const express = require('express');
const router = express();
const racionCtrl = require('../controllers/racion_animal.controller');
const { auth } = require('../utils/auth.utils');


router.delete('/:id',[auth] ,racionCtrl.destroy);

module.exports = router;