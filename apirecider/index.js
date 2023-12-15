const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { setupRoutes } = require('./routes/foodController/food.router');
const axios = require('axios');
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.post('/recommend', async (req, res) => {
  const inputData = {
    ingredients: req.body.ingredients
  };

  try {
    // Make a request to Flask API
    const response = await axios.post('https://backendpy-dot-ch2-ps391-recider.et.r.appspot.com/recommend', inputData);

    // Send the response from Flask API to the client
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error making request to Flask API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

setupRoutes(app);

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to Recider');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
