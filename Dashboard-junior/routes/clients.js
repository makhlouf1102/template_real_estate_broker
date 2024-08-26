const authMiddleware = require('../middleware/auth');
const router = require('express').Router();
const clientsController = require('../controllers/clients.controller');

router.get('/', (req, res) => {
    res.render('dashboard/clients/index', { layout: 'dashboard/side-bar-layout', path: '/dashboard/clients' });
});

router.get('/:id', (req, res) => {
    res.render('dashboard/clients/view-client', { layout: 'dashboard/side-bar-layout', path: '/dashboard/clients', id: req.params.id });
});

router.get('/new', (req, res) => {
    res.render('dashboard/clients/new', { layout: 'dashboard/side-bar-layout', path: '/dashboard/clients' });
});

router.post('/all', authMiddleware, clientsController.findAll);
router.post('/add', authMiddleware, clientsController.create);
router.post('/:id', authMiddleware, clientsController.findById);
router.put('/:id', authMiddleware, clientsController.update);
router.delete('/:id', authMiddleware, clientsController.delete);

module.exports = router;    