const { Router } = require('express');
const router = Router();

const { getBars, createBar, getBarById, deleteBar } = require('../controllers/index.controller')

router.get('/bars', getBars);
router.get('/bars/:id_bar', getBarById);
router.post('/bars', createBar);
router.delete('/bars/:id_bar', deleteBar);

module.exports = router;