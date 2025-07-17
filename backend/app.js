const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

/*const urlRoutes = require('./routes/urlRoutes');
app.use('/shorten', urlRoutes); */
app.get('/', (req, res) => {
    res.send('Backend is running properly 🚀');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

module.exports = app;
