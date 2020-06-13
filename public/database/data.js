const mongoose = require('mongoose');
const schema = mongoose.Schema;

const new_client = new schema({
    nome: String,
    tel: String 
});

const client = mongoose.model('Cliente', new_client);

var nome;
var tel;

const user = new client({
    nome: nome,
    tel: tel
});

module.exports = user;