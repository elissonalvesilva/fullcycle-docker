import express from "express";
import config from "./config.js" 
import connectDB from "./database.js";
import getUserRepository from "./repository.js";
import migration from './migration.js';

const connection = connectDB(config.databaseConfig);
const app = express();

app.get("/", async (req, res) => {
    const people = await getUserRepository(connection);

    const peopleList = `
        ${people?.map((person) => {
            return `<li>${person.name}</li>`
        })}
    `;

    const html = `
        <h1>Full Cycle Rocks!</h1>

        <h2 Users: </h2>
        <ul>
            ${peopleList}
        </ul>
    `;

    res.send(html);
});


connection.then(() => {
    app.listen(config.APP_PORT, () => {
        try {
            migration(connection).migrate();
            console.log(`${config.APP_NAME} is running in ${config.APP_PORT}`);
        } catch (error) {
            console.error(error)
        }
    });
}).catch((err) => console.error(err))


