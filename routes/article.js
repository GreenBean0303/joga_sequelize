const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

// Route to get all articles
router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);

module.exports = router;
