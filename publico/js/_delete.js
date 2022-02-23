const db = require('./_database');

async function queryDelete(id){
    await db.connect();
    
    await db.query('DELETE FROM comentario WHERE id = ' + id);

    console.log('Exclusão realizada');

    await db.end();
}

queryDelete();