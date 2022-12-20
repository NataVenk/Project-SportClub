const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
const session = require('express-session');
require('dotenv').config(); // allow access to .env

// const helpers = require('./utils/helpers');
// const hbs = exphbs.create({ helpers });

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 6505;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

const sess = {
  secret: process.env.SECRET, // gets secret from .env
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sets up the routes

app.use(require('./controllers/some-routes'));
app.use(require('./controllers/class-routes'));

// app.use(require('./controllers/..'));
app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });