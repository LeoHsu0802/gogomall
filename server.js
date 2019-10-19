const express = require('express');
const mongoose = require('mongoose');
const config = require("config");

const app = express();

//Middleware
app.use(express.json());

//MongoDB connect
const db = config.get('mongoURI');

mongoose
    .connect(db,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
     })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    // Use Routes
    app.use('/api/item', require('./routes/api/item'));
    app.use('/api/user', require('./routes/api/user'));
    app.use('/api/auth', require('./routes/api/auth'));

    const port = process.env.PORT || 5000
    app.listen(port, () => console.log(`Server started on port ${port}`));