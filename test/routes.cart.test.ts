process.env.NODE_ENV = 'test';
import chai from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
chai.use(chaiHttp);
import uuid from "uuid/v4";
import server from "../src";
import knex from "../src/db/config";

describe('Routes: cart', () => {
  beforeEach(() => {
    return knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe('GET /cart', () => {
    test('Should return array of cart', async () => {
      const res = await chai.request(server).get('/cart');
      expect(res.status).toEqual(200);
      expect(res.body.data).toBeDefined();
    });
  });

  describe('POST /addToCart', () => {
    test('Should return single post after insert', async () => {
      const res = await chai.request(server)
        .post('/addToCart')
        .send({"cartid" : uuid(),"product_name" : "Test1","qty" : 5,"unit_price" : 100,"user_email" : "jesmathew96@gmail.com"});

      expect(res.status).toEqual(200);
      expect(res.body.data).toBeDefined();
    });

    test('Should return error status, message, when body invalid', async () => {
      const res = await chai.request(server)
        .post('/addToCart')
        .send({"cartid": ""});
      expect(res.status).toEqual(400);
      expect(res.body.error).toBeDefined();
    });

    test('Should return error status, message, when body is blank', async () => {
      const res = await chai.request(server)
        .post('/addToCart')
        .send({});
      expect(res.status).toEqual(400);
      expect(res.body.error).toBeDefined();
    });

  });

});