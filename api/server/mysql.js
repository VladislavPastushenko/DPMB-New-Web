export default class MySQL {

    constructor(host, username, password, database) {
        const knex = require('knex')({
            client: 'mysql2',
            connection: {
                host     : host,
                user     : username,
                password : password,
                database : database,
            }
        })
        this.orm = require('bookshelf')(knex);
        this.orm.plugin('bookshelf-relations');
    }

}
