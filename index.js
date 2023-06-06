import express from "express";
import accountsRouter from "./routes/accounts.routes.js"
import cors from "cors"

import {
    promises as fs
} from "fs"

import winston from "winston";
import swaggerUi from "swagger-ui-express";
import {swaggerDocument} from "./doc.js"
import { graphqlHTTP } from "express-graphql";
import Schema from "./schema/index.js"

const app = express();
app.use(express.json());
app.use(cors());
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument)),
app.use("/graphql", graphqlHTTP({
    schema : Schema,
    //rootValue: root,
    graphiql: true
}));

const {
    combine,
    timestamp,
    label,
    printf
} = winston.format;
const myFormat = printf(({
    level,
    message,
    label,
    timestamp
}) => {
    return `${timestamp} [${label}] [${level}] : [${message}]`;
})

global.fileName = "accounts.json";
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({
            filename: "my-bank-api.log"
        })
    ],
    format: combine(
        label({
            label: "my-bank-api"
        }),
        timestamp(),
        myFormat
    )
})

app.use("/accounts", accountsRouter);

app.listen(3000, async () => {
    const initJson = {
        nextId: 1,
        accounts: []
    }

    try {
        await fs.readFile(global.fileName);
        logger.info("API Started!");

    } catch (err) {
        await fs.writeFile(global.fileName, JSON.stringify(initJson)).then(() => {
            logger.info("API Started and File Created!");
        });

    }
});