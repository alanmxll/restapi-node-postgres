const { Router } = require('express');
const router = Router();

const { getBars, createBar, getBarById, deleteBar, updateBar } = require('../controllers/index.controller')

router.get('/bars', getBars);
router.get('/bars/:id_bar', getBarById);
router.post('/bars', createBar);
router.put('/bars/:id_bar', updateBar);
router.delete('/bars/:id_bar', deleteBar);

module.exports = router;