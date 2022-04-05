import { Request, Response, Router } from "express";
import { Url } from "../entity/url.entity";
import { nanoid } from "nanoid";
import { UrlService } from "../Service/url.service";

export class UrlController {
  private router: Router;
  private urlService: UrlService;
  constructor() {
    this.router = Router();
    this.initializeRoutes();
    this.urlService = new UrlService();
  }

  private async createURL(req: Request, res: Response) {
    return this.urlService.createURL(req, res);
    // const url: Url = req.body;
    // if (!url.originalURL) {
    //   res.send("Please enter a valid URL");
    //   res.end();
    // }
    // url.shortURL = nanoid();
    // try {
    //   const result = await Url.save(url);
    //   return res.status(200).json(result);
    // } catch (error: any) {
    //   console.error(error.error.message);
    //   res.status(400);
    // }
  }
  private async getAllURL(req: Request, res: Response) {
    return this.urlService.getAllURL(req, res);
    // try {
    //   const url = await Url.find();
    //   return res.status(200).json(url);
    // } catch (error: any) {
    //   console.error(error.error.message);
    //   res.status(400).send(error.message);
    // }
  }
  async getOriginalUrl(req: Request, res: Response) {
    return this.urlService.getOriginalUrl(req, res);
    // const shortURL = req.params.key;
    // try {
    //   const url = await Url.findOne({
    //     where: {
    //       shortURL,
    //     },
    //   });
    //   if (url) {
    //     return res.json(url);
    //   }
    //   return res.sendStatus(404);
    // } catch (error: any) {
    //   console.error(error.error.message);
    //   res.status(400).send(error.message);
    // }
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
