import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").insert([
        { name: "Nhoque quatro queijos", price: 45, created_at: new Date(), updated_at: new Date()  },
        { name: "Isca de frango", price: 60, created_at: new Date(), updated_at: new Date()  },
        { name: "Tilápia com alcaparras", price: 100, created_at: new Date(), updated_at: new Date()  },
        { name: "Bolinho de mandioca", price: 75, created_at: new Date(), updated_at: new Date()  },
        { name: "Escondidinho de carne de sol", price: 65, created_at: new Date(), updated_at: new Date()  },
        { name: "Porção de batatas fritas", price: 40, created_at: new Date(), updated_at: new Date()  },
        { name: "Executivo de frango grelhado", price: 36, created_at: new Date(), updated_at: new Date()  },
        { name: "Executivo de tilápia grelhada", price: 39, created_at: new Date(), updated_at: new Date()  },
        { name: "Caldo de palmito", price: 30, created_at: new Date(), updated_at: new Date()  },
        { name: "Refrigerante 350ml", price: 7.5, created_at: new Date(), updated_at: new Date()  },
        { name: "Suco de laranja 440ml", price: 10, created_at: new Date(), updated_at: new Date()  },
    ])
};

