const express = require('express');
const router = express.Router();
const sexController = require('../controllers/sexController.js');


router.post('/sex', sexController.createSex);

router.get('/sex', sexController.getAllSex);

router.put('/sex',sexController.updateSex);

router.delete('/sex',sexController.deleteSex)

module.exports = router;
