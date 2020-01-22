const { Router } = require('express');
const router = Router();

const { getBars, createBar } = require('../controllers/index.controller')

router.get('/bars', getBars);
router.post('/bars', createBar);

module.exports = router;