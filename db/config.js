const Sequalize = require('sequelize')
const postgress = {
    option: {
        host: '172.19.0.2',
        port: '5432',
        database: 'user_service',
        dialect: 'postgres',
        username: 'root',
        password: 'root'
    },
    client: null
}

const connectDb = async () => {
    try {
        const db = new Sequalize(postgress.option)
        await db.authenticate()
        console.log('connection established successfully');
        return db
    } catch (error) {
        console.log('unable to connect', error);
    }
}

module.exports = { connectDb, postgress }