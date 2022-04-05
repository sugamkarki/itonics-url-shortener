require("dotenv").config();
import "reflect-metadata";
import express, { Express } from "express";
import { createConnection } from "typeorm";
import { UrlController } from "./Controller/url.controller";
import cors from "cors";

const PORT = process.env.PORT || 3003;

class Server {
  private app: Express;
  private urlController!: UrlController;

  constructor() {
    this.app = express();
    this.setupConfig();
    this.setupRoutes();
  }

  public setupConfig(): void {
    this.app.use(
      cors({
        origin: "localhost:4200",
      })
    );
    this.app.use(express.json());
  }

  public async setupRoutes() {
    await createConnection();
    this.urlController = new UrlController();

    // USERS Endpoint
    this.app.use("/api/urls", this.urlController.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log("Listening on port:", PORT);
    });
  }
}

const server = new Server();

// Start server
server.start();
