const Sequelize = require('sequelize');
const QuoteModel = require('./models/quotedojo');

// Acá creamos la conexión a la Base de Datos
const sql = new Sequelize('quotes', 'root', 'LKMachine246', {
    host: 'localhost',
    dialect: 'mysql'
});

const QuoteNew = QuoteModel(sql, Sequelize)

// Después sincronizamos nuestro código con la base de datos  // { force: true}
sql.sync()
.then(() => {
    console.log('Base de datos y tablas creadas')
});

module.exports = {
    QuoteNew,
};