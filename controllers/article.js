const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');
const Article = require('../models/article')(sequelize, Sequelize.DataTypes);
const Author = require('../models/author')(sequelize, Sequelize.DataTypes);

const models = require('../models');



// get all data from table
const getAllArticles = (req, res) => {
    models.Article.findAll()
    .then(articles => {
        console.log(articles)
        return res.status(200).json({articles});
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
}

const getArticleBySlug = (req, res) => {
    models.Article.findOne({ 
        where: { 
            slug: req.params.slug 
        },
        include:[{
            model: models.Author
        }],

    })
    .then(article => {
        console.log(article)
        return res.status(200).json({ article });
        })
        .catch (error => {
            return res.status(500).send(error.message);
        })
};
        

module.exports = {
    getAllArticles,
    getArticleBySlug
}; 
