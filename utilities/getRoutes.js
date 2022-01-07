// const routes = require('../server/routes');
// const app = require('../server/server');

module.exports = (routes, app) => {
  routes.forEach(({ url, quote, status }) => {
    app.get(url, (req, res) => {
      // res.status(200).send(`${quote}`);
      res.send(`<img src=https://http.cat/${res.statusCode} />`);
    });
  });
};
