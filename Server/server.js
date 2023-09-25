const express = require('express');
const connectDatabase = require('./database');
const cors = require('cors');
const Professores = require('./Professores');

const server = express();
server.use(cors());

connectDatabase();
server.use(express.json());
server.get('/', async (req, res) => {
    const professores = await Professores.findOne();
    const resp = professores.nome;
    res.json(`${resp} + Alunos`)
});

server.listen(3001);