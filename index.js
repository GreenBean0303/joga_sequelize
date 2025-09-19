const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Joga Sequelize API',
        status: 'running' 
    });
});

// Planned routes (to be implemented)
// GET / - get all articles
// GET /article/:slug - get article by slug
// GET /author/:id - get author's articles by author id

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
