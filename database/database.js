/*Importação do modulo do sequelize*/
const Sequelize = require('sequelize');




const connection = new Sequelize(
    'api_atividade_bd',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;