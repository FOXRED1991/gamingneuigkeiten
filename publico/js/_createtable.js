const db = require('./_database');

async function createTable(){
    
    await db.query(`CREATE TABLE comentario(
        id serial PRIMARY KEY,
        nome VARCHAR(200),
        texto text
    )`);

    console.log('Tabelas criadas');

    await db.end();
}

createTable();