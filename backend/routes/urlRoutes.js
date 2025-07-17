const express = require('express');
const router = express.Router();
const controller = require('../controllers/urlControllers.js');

router.post('/', controller.createShortUrl);
router.get('/:code', controller.getOriginalUrl);
router.put('/:code', controller.updateUrl);
router.delete('/:code', controller.deleteUrl);
router.get('/:code/stats', controller.getUrlStats);

module.exports = router;
