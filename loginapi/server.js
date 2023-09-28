const dotenv=require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const cors=require('cors')
const cookieparser = require('cookie-parser');
const path = require('path');
const app = express();

dotenv.config({path:'./.env'})
// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(cookieparser())
// Database connection
const mongoid=process.env.MID
let db=process.env.DB||"database"

mongoose.connect(`${mongoid}${db}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.use('/users', userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
