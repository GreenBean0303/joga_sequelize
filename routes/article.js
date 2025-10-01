const express = require("express");
const router = express.Router();
const articleController = require("../controllers/article");
const authorController = require("../controllers/author");
const articleAdminController = require("../controllers/admin/article");

// Public routes
router.get("/", articleController.getAllArticles);
router.get("/article/:slug", articleController.getArticleBySlug);
router.get("/authors", authorController.getAllAuthors);
router.get("/author/:id", authorController.getAuthorWithArticles);

// Admin route
router.post("/admin/article/create", articleAdminController.createArticle);

module.exports = router;
