/**
 * Required External Modules
 */

import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";

/**
 * Application
 */

class Application {
  express: Express;

  constructor() {
    this.express = express();
    this.client();
  }

  middlewares() {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(express.json({ limit: "5mb" }));
  }

  client() {
    this.express.get("/", (_req, res) => {
      res.json({
        App: "Job Queue",
        Status: "Development",
        Author: "Ricardo Morato <ricardomoratodev@gmail.com>",
      });
    });
  }
}

const app = new Application().express;

export default app;
