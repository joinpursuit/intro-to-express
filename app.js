// DEPENDENCIES
const app = require('express')();
const routes = require('./server/routes');

// ROUTES
const getRoutes = require('./utilities/getRoutes');
getRoutes(routes, app);

app.use((req, res, next) => {
  res.status(404).send(`<img src='https://http.cat/${res.statusCode}'/>`);
});

// EXPORT
module.exports = app;
