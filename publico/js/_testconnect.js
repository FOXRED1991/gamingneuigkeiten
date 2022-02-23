const db = require('./_database');

async function connect(){
    await db.connect();
    console.log('Conectou ao banco');
    await db.end();
}

module.exports = connect;