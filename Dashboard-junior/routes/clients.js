const authMiddleware = require('../middleware/auth');
const router = require('express').Router();
const clientsController = require('../controllers/clients.controller');

router.get('/', (req, res) => {
    res.render('dashboard/clients/index', { layout: 'dashboard/side-bar-layout', path: '/dashboard/clients' });
});

router.post('/all', authMiddleware, clientsController.findAll);

module.exports = router;    