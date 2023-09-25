const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema({
    nome: {
        type: String
    }
})

const Professores = mongoose.model('Professores', CollectionSchema);

module.exports = Professores;