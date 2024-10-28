import { Knex } from "knex";

export async function seed(knex: Knex) {
    // Limpa as tabelas
    await knex("orders").del();
    await knex("tables_sessions").del();
    await knex("tables").del();

    // Insere dados
    await knex("tables").insert([
        { id: 1, table_number: 1, created_at: new Date(), updated_at: new Date() },
        { id: 2, table_number: 2, created_at: new Date(), updated_at: new Date() },
        { id: 3, table_number: 3, created_at: new Date(), updated_at: new Date() },
        { id: 4, table_number: 4, created_at: new Date(), updated_at: new Date() },
    ]);
      
      await knex("tables_sessions").insert([
        { id: 1, table_id: 1, opened_at: new Date(), closed_at: null },
        { id: 2, table_id: 2, opened_at: new Date(), closed_at: null }
      ]);
      
      await knex("orders").insert([
        { id: 1, table_session_id: 1, product_id: 1, quantity: 2, price: 20.0, created_at: new Date(), updated_at: new Date() },
        { id: 2, table_session_id: 2, product_id: 2, quantity: 1, price: 15.0, created_at: new Date(), updated_at: new Date() }
      ]);
}
