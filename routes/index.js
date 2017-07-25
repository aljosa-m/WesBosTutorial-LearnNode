const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')
// Do work here
const { catchErrors } = require('../handlers/errorHandlers');
router.get('/', storeController.getStores );
router.get('/stores', storeController.getStores );
router.get('/add', storeController.addStore );
router.post('/add', catchErrors(storeController.createStore))

module.exports = router;