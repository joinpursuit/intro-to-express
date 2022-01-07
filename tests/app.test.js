const app = require('../app');
const request = require('supertest');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    let response = await request(app).get('/');
    return expect(response.statusCode).toBe(200);
  });
});
