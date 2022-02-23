const db = require('./_database');

async function queryInsert(nome , comentario){
    await db.connect();
    
    const querySql = "INSERT INTO comentario (nome,texto) VALUES ($1,$2)";  

    await db.query(querySql,[nome , comentario]);

    console.log('Dados Inseridos');

    await db.end();
}

module.exports = queryInsert;