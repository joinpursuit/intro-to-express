const magic8Responses = require('../data/magic8Responses');
module.exports = () =>
  magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
