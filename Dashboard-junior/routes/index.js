const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');
const authController = require('../controllers/auth.controller');

router.get('/login', indexController.getLoginView);
router.get('/logout', indexController.getLogoutView);
router.post('/validate-token', authController.validateToken);
router.get('/review-requests/review/me/rn/:id', indexController.getReviewRequestsView);

module.exports = router;