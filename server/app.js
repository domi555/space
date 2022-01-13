const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const spacesRoutes = require('./routes/spaces');
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

const { notFound, errorHandler } = require('./middleware/errorHandler');

require('colors');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

app.use('/spaces', spacesRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
