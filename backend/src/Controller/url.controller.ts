import { Request, Response, Router } from "express";
import { Url } from "../entity/url.entity";
import { nanoid } from "nanoid";
import { UrlService } from "../Service/url.service";
import { STATUS_CODES } from "http";

export class UrlController {
  private router: Router;
  private urlService: UrlService;
  constructor() {
    this.router = Router();
    this.initializeRoutes();
    this.urlService = new UrlService();
  }

  private async createURL(req: Request, res: Response) {
    try {
      const createdUrl: Url = await this.urlService.createURL(
        req.body.originalURL
      );
      return res.status(200).json(createdUrl);
    } catch (e: any) {
      res.status(400).send(e.message);
    }
  }
  private async getAllURL(req: Request, res: Response) {
    try {
      const urls: Url[] = await this.urlService.getAllURL();

      res.status(200).json(urls);
    } catch (e: any) {
      res.send(e.message);
    }
  }
  async getOriginalUrl(req: Request, res: Response) {
    try {
      const originalUrl: Url = await this.urlService.getOriginalUrl(
        req.params.key
      );
      if (originalUrl) {
        console.log("here!!!!!!!");
        console.log(originalUrl);
        return res.status(200).json(originalUrl);
      }
      res.status(400).send("KEY not found");
    } catch (e: any) {
      res.status(400).send(e.message);
    }
    // return res.status(400).send("KEY not found");
  }

  public getRouter(): Router {
    return this.router;
  }

  public initializeRoutes() {
    this.router.post("", (req, res) => this.createURL(req, res));
    this.router.get("", (req, res) => this.getAllURL(req, res));
    this.router.get("/:key", (req, res) => this.getOriginalUrl(req, res));
  }
}
