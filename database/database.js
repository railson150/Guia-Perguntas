const Sequelize = require('sequelize')
cont senha = ''

const connection = new Sequelize('guiaperguntas', 'root', senha, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
