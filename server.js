const express = require('express');
const mongoose = require('mongoose');
const config = require("config");
const path = require('path');

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

    // Serve static assets if in production
    if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));
    
        app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }

    const port = process.env.PORT || 5000
    app.listen(port, () => console.log(`Server started on port ${port}`));