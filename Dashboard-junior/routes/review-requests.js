const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const reviewRequestController = require('../controllers/request-review.controller');

router.get('/', async (req, res) => {
    res.render('dashboard/review-requests/index', { layout: 'dashboard/side-bar-layout', path: '/dashboard/review-requests' });
});

router.post('/create', authMiddleware, reviewRequestController.create);

module.exports = router;