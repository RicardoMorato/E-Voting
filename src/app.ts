import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";

class Application {
  express: Express;

  constructor() {
    this.express = express();
    this.connection();
    this.client();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(express.json({ limit: "5mb" }));
  }

  connection() {
    const MongoClient = require("mongodb").MongoClient;

    MongoClient.connect(process.env.MONGO_CONNECTION_STRING, {
      useUnifiedTopology: true,
    })
      .then((client: any) => {
        console.log("Successfully connected to database");
        const db = client.db("e-voting-db");
      })
      .catch((err: any) => console.error(err));
  }

  client() {
    this.express.get("/", (req, res) => {
      res.json({
        App: "E-Voting API",
        Status: "Development",
        Author: "Ricardo Morato <ricardomoratodev@gmail.com>",
      });
    });
  }
}

const app = new Application().express;

export default app;
