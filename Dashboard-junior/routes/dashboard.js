const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const blogRouter = require('./blogs');

const layout = 'dashboard/side-bar-layout';

router.use('/blogs', blogRouter);

// Dashboard home page
router.get('/', (req, res) => {
    res.render('dashboard/home-dash', { layout, path: '/dashboard' });
});

// Settings page
router.get('/settings', (req, res) => {
    res.render('dashboard/settings', { layout, path: '/dashboard/settings' });
});

// 404 handler for dashboard routes
router.use((req, res) => {
    res.status(404).render('dashboard/not-found', { layout, path: req.originalUrl });
});

module.exports = router;