const express = require('express')
const {soma, subtrair, multiplicar, dividir} = require('./controladores/calculadora')
const rotas = express();

rotas.get('/somar', soma);
rotas.get('/subtrair', subtrair);
rotas.get('/multiplicar', multiplicar);
rotas.get('/dividir', dividir);

module.exports = rotas