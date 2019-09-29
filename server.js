const express = require('express');
const mongoose = require('mongoose');
const item = require('./routes/api/item')
const config = require("config");

const app = express();

//BidyParse Middleware
app.use(express.json());

//MongoDB connect
const db = config.get('mongoURI');

mongoose
    .connect(db,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true
     })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    // Use Routes
    app.use('/api/item', item);

    const port = process.env.PORT || 5000
    app.listen(port, () => console.log(`Server started on port ${port}`));