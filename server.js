const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recyclingRoutes = require('./routes/recycling');

const app = express();

mongoose.connect('mongodb://localhost:27017/recycling', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use('/api', recyclingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});