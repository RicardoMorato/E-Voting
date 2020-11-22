import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";

class Application {
  express: Express;

  constructor() {
    this.express = express();
    this.client();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(express.json({ limit: "5mb" }));
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
