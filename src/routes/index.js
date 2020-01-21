const { Router } = require('express');
const router = Router();

router.get('/bars', (req, res) => {
    res.send('bars');
})

module.exports = router;