const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Helper function to read the JSON file
const readData = () => {
    const data = fs.readFileSync('data.json');
    return JSON.parse(data);
}