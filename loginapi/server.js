const dotenv=require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cookieparser = require('cookie-parser');
const cors=require('cors')
const path = require('path');


const app = express();

dotenv.config({path:'./.env'})


// Middleware
app.use(cookieparser())
app.use(bodyParser.json())


/* const whitelist = [ 
  'http://localhost:5173', // not https
  'https://yourprod.ip.address.com', // must be https!
  'http://10.5.119.50:5173', // optional, LAN access
]

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {

      // `!origin` allows server-to-server requests (ie, localhost requests)
      if(!origin || whitelist.indexOf(origin) !== -1) {
          callback(null, true)
      } else {
          callback(new Error("Not allowed by CORS: "+ origin))
      }
  },
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions)) */
app.use(cors({ origin: true, credentials: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  next();
});
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
