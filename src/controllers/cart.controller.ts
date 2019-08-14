import { Request, Response } from "express";
const knex = require('../db/config.ts');

/**
* Objective: "For returning the list of cart items added"
* parameters: req, res
* returns: status, data/error
* author: Jeslin Mathew
* date: 13 August 2019
**/
export let List = (req: Request, res: Response) => {
  try{
    knex.default.select().table('cart')
      .then( function (result: any) {
        res.status(200).send({ data: result }); // respond back to request
       })
      .catch(function(e: Error) {
        res.status(400).send({ error: e });
      });
  }catch(error){
    res.status(400).send({ error: error });
  }
};

/**
* Objective: "Add items to the cart"
* parameters: req, res
* returns: status, data/error
* author: Jeslin Mathew
* date: 13 August 2019
**/
export let addToCart = (req: Request, res: Response) => {
  try{
    knex.default('cart').insert(req.body)
      .then( function (result : any) {
        res.status(200).send({ data: "Record added successfully" });   // respond back to request
      })
      .catch(function(e : Error) {
        res.status(400).send({ error: e });
      });
  }catch(error){
    res.status(400).send({ error: error });
  }
};