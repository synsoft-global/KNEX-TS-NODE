import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    await knex.schema.createTable("cart", (t: Knex.TableBuilder) => {
    t.uuid('cartid').primary();
    t.string('product_name', 256);
    t.string('qty', 256);
    t.string('unit_price', 256);
    t.string('user_email', 256);
    t.timestamp('created_at', true).notNullable().defaultTo(knex.fn.now());
    t.timestamp('updated_at', true).notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<any> {
    await knex.schema.dropTable('cart');
}
// exports.down = (knex, Promise) => knex.schema.dropTable('cart');

