const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const history = require('connect-history-api-fallback');
const spacesRoutes = require('./routes/spaces');
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');
const sessionRoutes = require('./routes/sessions');

const { notFound, errorHandler } = require('./middleware/errorHandler');

require('colors');
require('dotenv').config();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

app.use(morgan('dev'));
app.use(cors());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/public')));
app.use(history());
app.use(helmet());
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());

// Register middleware for express sessions here

const { PORT, NODE_ENV, SESSION_LIFETIME, SESSION_NAME, SESSION_SECRET } = process.env;
// app.set('trust proxy', 1);

// app.use(
//   session({
//     secret: SESSION_SECRET,
//     name: SESSION_NAME,
//     saveUninitialized: true,
//     resave: false,
//     cookie: {
//       maxAge: SESSION_LIFETIME * 1000 * 60 * 60,
//       httpOnly: false,
//       sameSite: true,
//       secure: false,
//     },
//   }),
// );

app.use('/spaces', spacesRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/', sessionRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT);
