const fetch = require("node-fetch");
const request = require('supertest'); //allow testing w/ good syntax
const app = require('./trentose2jan12-server')

test('GET / should return 200', async () => {
    const response = await request(app).get('/getArea?side1=2&side2=2');
    expect(response.statusCode).toBe(200);
});
test('GET / should return 200', async () => {
    const response = await request(app).get('/getArea?side1=a&side2=2');
    expect(response.statusCode).toBe(200);
});
test('GET / should return 200', async () => {
    const response = await request(app).get('/getArea?si=2&side2=2');
    expect(response.statusCode).toBe(200);
});
test('GET / should return 200', async () => {
    const response = await request(app).get('/getArea?side1=2');
    expect(response.statusCode).toBe(200);
});