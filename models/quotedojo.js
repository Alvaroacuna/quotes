module.exports = (sql, type) => {
    return sql.define('quotedojo', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        author: type.STRING,
        text: type.STRING
    });
}