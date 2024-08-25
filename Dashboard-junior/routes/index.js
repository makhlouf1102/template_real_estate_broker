const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');

router.get('/login', indexController.getLoginView);
router.get('/logout', indexController.getLogoutView);

module.exports = router;