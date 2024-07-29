const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors()); 

app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        res.json(response.data);
        console.log('Fetched Data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Error fetching data');
    }
});

app.listen(6000, () => {
    console.log("Server is running on port 6000");
});
