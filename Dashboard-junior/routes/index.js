const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.getIndex);
router.post('/login', indexController.postLogin);
router.get('/logout', indexController.getLogout);
router.get('/register', indexController.getRegister);
router.post('/register', indexController.postRegister);

module.exports = router;