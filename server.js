
require('dotenv').config();
const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json('Hi');
});

app.get('/movie', async (req, res) => {
    const API_URL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`;
    const title = req.query.title;
    console.log('Title:', title);
    // console.log(process.env);

    try {
        const response = await axios.get(`${API_URL}&s=${title}`);
        const data = response.data;
         res.json(data);
        
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
