const express = require('express')
const router = express.Router();
const blogController = require('../controllers/blogposts')

router.get('/', blogController.readAll);
router.get('/:id', blogController.readSingle);
router.post('/', blogController.create);
router.put('/:id', blogController.update);
router.delete('/:id', blogController.destroy);

module.exports = router;
