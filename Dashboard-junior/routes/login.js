const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.get('/', authController.getLoginView);
// router.post('/login', authController.postLogin);

module.exports = router;