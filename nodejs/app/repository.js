export default async function getUserRepository(connection) {
    const conn = await connection;
    const query = "SELECT * FROM people";
    const [people] = await conn.execute(query)
    return people;
}