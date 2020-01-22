const { Router } = require('express');
const router = Router();

const { getBars, createBar, getBarById } = require('../controllers/index.controller')

router.get('/bars', getBars);
router.get('/bars/:id_bar', getBarById);
router.post('/bars', createBar);

module.exports = router;