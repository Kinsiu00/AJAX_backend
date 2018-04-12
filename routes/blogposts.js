const express = require('express')
const router = express.Router();
const blogController = require('../controllers/blogposts')

router.get('/', blogController.readAll);
router.get('/:id', blogController.readSingle);
router.get('/', blogController.create);
router.get('/:id', blogController.update);
router.get('/:id', blogController.destroy);

module.exports = router;
