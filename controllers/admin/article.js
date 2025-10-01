// get connection to database ORM object
const models = require("../../models");

// create new article into data table
const createArticle = (req, res) => {
  let name = req.body.name;
  let slug = req.body.slug;
  let image = req.body.image;
  let body = req.body.body;
  let author_id = req.body.author_id;

  models.Article.create({
    name: name,
    slug: slug,
    image: image,
    body: body,
    author_id: author_id,
    published: new Date().toISOString().slice(0, 19).replace("T", " "),
  })
    .then((article) => {
      console.log(article);
      return res.status(200).json({ message: "New article is added" });
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

// GET - Fetch article data for editing (including all authors for dropdown)
const getArticleForEdit = (req, res) => {
  const articleId = req.params.id;

  Promise.all([models.Article.findByPk(articleId), models.Author.findAll()])
    .then(([article, authors]) => {
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      return res.status(200).json({
        article: article,
        authors: authors,
      });
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

// POST - Update article data
const updateArticle = (req, res) => {
  const articleId = req.params.id;

  let name = req.body.name;
  let slug = req.body.slug;
  let image = req.body.image;
  let body = req.body.body;
  let author_id = req.body.author_id;

  models.Article.update(
    {
      name: name,
      slug: slug,
      image: image,
      body: body,
      author_id: author_id,
      published: new Date().toISOString().slice(0, 19).replace("T", " "),
    },
    {
      where: { id: articleId },
    }
  )
    .then(() => {
      return res.status(200).json({ message: "Article updated successfully" });
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

// POST - Delete article
const deleteArticle = (req, res) => {
  const articleId = req.params.id;

  models.Article.destroy({
    where: { id: articleId },
  })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        return res.status(404).json({ error: "Article not found" });
      }
      return res.status(200).json({ message: "Article deleted successfully" });
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

module.exports = {
  createArticle,
  getArticleForEdit,
  updateArticle,
  deleteArticle,
};
