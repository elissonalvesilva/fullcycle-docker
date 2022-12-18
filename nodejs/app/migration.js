export default function migration(connection) {
    const createTable = `
        CREATE TABLE IF NOT EXISTS people (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(50),
            PRIMARY KEY (id)
        )
    `

    const insertPeople = `
        INSERT INTO people(name) VALUES("Elisson Silva")
    `

    return {
        async migrate() {
            const conn = await connection;

            try {
                await conn.execute(createTable);
                await conn.execute(insertPeople);
                console.log("Success during migration");
            } catch (error) {
                console.log("Error during migration");
                console.error(error)
            }
        }
    } 
}