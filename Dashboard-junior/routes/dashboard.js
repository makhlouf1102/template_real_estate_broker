const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const layout = 'dashboard/side-bar-layout';

// Dashboard home page
router.get('/', (req, res) => {
    res.render('dashboard/home-dash', { layout });
});

// Profile page
router.get('/profile', (req, res) => {
    res.render('dashboard/profile', { layout });
});

// Settings page
router.get('/settings', (req, res) => {
    res.render('dashboard/settings', { layout });
});

// make a not found page 
router.get('*', (req, res) => {
    res.render('dashboard/not-found', { layout });
});

module.exports = router;
