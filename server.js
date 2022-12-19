const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');
// const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 6505;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

// Sets up the routes

app.use(require('./controllers/some-routes'));
// app.use(require('./controllers/..'));
// app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });