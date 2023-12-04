const express = require('express');
const app = express();
const cors = require('cors');
const authRoute = require('./routes/auth.route');
const contactRoute = require('./routes/contact.route');

app.use(cors());

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

app.use('/auth', authRoute);
app.use('/contact', contactRoute);

app.listen(6310, () => {
  console.log('Server is running on port 6310');
});
