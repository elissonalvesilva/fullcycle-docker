import mysql from  'mysql2/promise';

export default async function connectDB(configDB) {
    try {
        const connection = await mysql.createConnection({
            host     : configDB.DATABASE_HOST,
            database : configDB.DATABASE_NAME,
            user     : configDB.DATABASE_USER,
            password : configDB.DATABASE_PASSWORD,
        });

        console.log(`Connected to ${configDB.DATABASE_NAME} database`);

        return connection;
    } catch (error) {
        console.error(`Err to connect to ${configDB.DATABASE_NAME}`);
        console.error(error)
        return;
    }
}