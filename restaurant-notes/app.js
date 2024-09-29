const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Helper functions

// Read data from file
const readData = () => {
    const data = fs.readFileSync('data.json');
    return JSON.parse(data);
}

// Write data to file
const writeData = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

// Routes

// Get all resturaunts
app.get('/restaurants', (req, res) => {
    const data = readData();
    res.json(data);
});

// Get a single restaurant
app.get('/restaurants/:id', (req, res) => {
    const data = readData();
    const {id} = req.params;
    const restaurant = data.find(r => r.id === id);
    if(restaurant){
        res.json(restaurant);
    } else {
        res.status(404).send('Not found');
    }
});

// Add a new restaurant
app.post('/restaurants', (req, res) => {
    const data = readData();
    data.push(req.body);
    writeData(data);
    res.json(data);
});

// Update a restaurant
app.put('/restaurants/:id', (req, res) => {
    const data = readData();
    const {id} = req.params.id;
    const updateResturant = req.body;
    const index = data.findIndex(r => r.id === id);
    if(index !== -1){
        data[index] = updateResturant;
        writeData(data);
        res.json(updateResturant);
    } else {
        res.status(404).json({message: 'Restaurant Not found' });
    }
});

// Delete a restaurant
app.delete('/restaurants/:id', (req, res) => {
    const data = readData();
    const {id} = req.params;
    const newData = data.filter(r => r.id !== id);
    writeData(newData);
    res.status(204).end();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});