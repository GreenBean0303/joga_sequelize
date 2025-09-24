// controllers/author.js
const models = require('../models');

// GET /author/:id - Kuvab konkreetse autori ja tema artiklid
const getAuthorWithArticles = (req, res) => {
    models.Author.findByPk(req.params.id, {
        include: [{
            model: models.Article
        }]
    })
    .then(author => {
        if (!author) {
            return res.status(404).json({
                error: 'Autorit ei leitud'
            });
        }
        
        console.log(author);
        return res.status(200).json({ 
            author: author
        });
    })
    .catch(error => {
        console.error('Viga autori leidmisel:', error);
        return res.status(500).send(error.message);
    });
};

// GET /authors - Kõigi autorite kuvamine
const getAllAuthors = (req, res) => {
    models.Author.findAll({
        include: [{
            model: models.Article
        }]
    })
    .then(authors => {
        console.log(authors);
        return res.status(200).json({ authors });
    })
    .catch(error => {
        console.error('Viga autorite leidmisel:', error);
        return res.status(500).send(error.message);
    });
};

module.exports = {
    getAuthorWithArticles,
    getAllAuthors
};