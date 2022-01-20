const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const spacesRoutes = require('./routes/spaces');
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');
const sessionRoutes = require('./routes/sessions');

const { notFound, errorHandler } = require('./middleware/errorHandler');

require('colors');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

// Register middleware for express sessions here

const { PORT, NODE_ENV, SESSION_LIFETIME, SESSION_NAME, SESSION_SECRET } = process.env;

app.use(
  session({
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: SESSION_LIFETIME * 1000 * 60 * 60,
      httpOnly: false,
      sameSite: true,
      secure: NODE_ENV === 'production',
    },
  }),
);

app.use('/spaces', spacesRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/', sessionRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT);
