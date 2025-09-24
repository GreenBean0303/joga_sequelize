const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author');

router.get('/authors', authorController.getAllAuthors);
router.get('/author/:id', authorController.getAuthorWithArticles);

module.exports = router;