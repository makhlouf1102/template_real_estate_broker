const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth');

router.post('/login', authController.authLogin);
router.post('/change-password', authMiddleware, authController.changePassword);

module.exports = router;