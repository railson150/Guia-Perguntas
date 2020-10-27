const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', 'railson150', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection