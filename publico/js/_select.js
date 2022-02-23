const db = require('./_database');

async function querySelect(){
    await db.connect();
    
    let result;
    result = await db.query('SELECT * FROM comentario');
    console.log(result.rows);

    await db.end();

}

module.exports = querySelect;