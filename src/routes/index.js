const { Router } = require('express');
const router = Router();

const { getBars } = require('../controllers/index.controller')

router.get('/bars', getBars);

module.exports = router;