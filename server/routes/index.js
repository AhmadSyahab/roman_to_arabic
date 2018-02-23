const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/convertArabic')

/* POST convert to Arabic. */
router.post('/convert', Controllers.to_arabic);

module.exports = router;
