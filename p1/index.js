"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("reflect-metadata");
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
var jogadores = [];
var idJogador = 1;
//CRIAR JOGADOR
app.post('/jogadores', function (req, resp) {
    var _a = req.body, nome = _a.nome, sexo = _a.sexo, categoria = _a.categoria;
    var novoJogador = {
        id: idJogador++,
        nome: nome,
        sexo: sexo,
        categoria: categoria,
    };
    jogadores.push(novoJogador);
    return resp.status(201).json(novoJogador);
});
//LISTAR JOGADORES
app.get('/jogadores', function (req, resp) {
    return resp.json(jogadores);
});
//PARA INICILIZAR 
app.listen(port, function () {
    console.log('Servidor rodando na porta ' + port);
});
