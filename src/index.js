require('dotenv').config();

const db = require('./config/db');

const express = require('express');
const cors = require('cors');

//router
const providerRouter = require('./router/provider');
const productRouter = require('./router/product');
const uploadRoute = require('./router/upload');
const { path } = require('express/lib/application');

//conect DB
db.connect();

//bodyParser Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//end point
app.get('/', (req, res) => {
  res.json('Api is working');
});

//use router
app.use('/user', providerRouter);
app.use('/upload', uploadRoute);
app.use('/product', productRouter);



const PORT = process.env.PORT || 8000;


app.listen(PORT, () => console.log(`Sever run at http://localhost:${PORT}`));
