require("dotenv").config();
import "reflect-metadata";
import express, { Express } from "express";
import { createConnection } from "typeorm";
import { UrlController } from "./Controller/url.controller";
const { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME, DB_LOGGING } =
  process.env;

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
    this.app.use(express.json());
  }

  public async setupRoutes() {
    await createConnection();
    //     {
    //   type: "postgres",
    //   host: DB_HOST,
    //   port: 5432,
    //   username: DB_USERNAME,
    //   password: DB_PASSWORD,
    //   database: DB_DATABASE,
    //   synchronize: true,
    //   entities: ["src/entity/**/*.ts"],
    //   logging: DB_LOGGING
    // }

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
