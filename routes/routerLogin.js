const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerLogin');
router.get('/', controller.index);

module.exports = router;