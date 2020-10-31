const express = require('express');
const router = express();
const calculoCtrl = require('../controllers/calculo_lecheria.controller');
const racionCtrl = require('../controllers/racion_animal.controller');
const requerimientoCtrl = require('../controllers/requerimiento_animal');
const { auth } = require('../utils/auth.utils');

// router.get('/',[auth] ,calculoCtrl.index);
router.get('/',[auth] ,calculoCtrl.show);
router.post('/',[auth] ,calculoCtrl.store);
router.delete('/:id',[auth] ,calculoCtrl.destroy);
// Racion
router.post('/:id/racion',[auth] ,racionCtrl.store);
router.get('/:id/racion',[auth] ,racionCtrl.index);
// Requerimiento
router.post('/:id/requerimiento',[auth] ,requerimientoCtrl.store);
module.exports = router;