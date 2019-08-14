import * as Knex from "knex";
import uuid from "uuid/v4";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("cart").del()
        .then(() => {
            // Inserts seed entries
            return knex("cart").insert([
                {
                  "cartid" : uuid(),
                  "product_name" : "Test1", 
                  "qty" : 5, 
                  "unit_price" : 100, 
                  "user_email" : "jesmathew96@gmail.com" 
                },
                {
                  "cartid" : uuid(),
                  "product_name" : "Test2", 
                  "qty" : 5, 
                  "unit_price" : 100, 
                  "user_email" : "jesmathew96@gmail.com" 
                },
                {
                  "cartid" : uuid(),
                  "product_name" : "Test3", 
                  "qty" : 5, 
                  "unit_price" : 100, 
                  "user_email" : "jesmathew96@gmail.com" 
                }
            ]);
        });
};
