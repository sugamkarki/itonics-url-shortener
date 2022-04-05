import { nanoid } from "nanoid";
import { Url } from "../entity/url.entity";
import { Request, Response } from "express";
export class UrlService {
  constructor() {}

  async createURL(req: Request, res: Response) {
    const url: Url = req.body;
    if (!url.originalURL) {
      res.send("Please enter a valid URL");
      res.end();
    }
    url.shortURL = nanoid();
    try {
      const result = await Url.save(url);
      return res.status(200).json(result);
    } catch (error: any) {
      console.error(error.error.message);
      res.status(400);
    }
  }

  async getAllURL(req: Request, res: Response) {
    try {
      const url = await Url.find();
      return res.status(200).json(url);
    } catch (error: any) {
      console.error(error.error.message);
      res.status(400).send(error.message);
    }
  }
  async getOriginalUrl(req: Request, res: Response) {
    const shortURL = req.params.key;
    try {
      const url = await Url.findOne({
        where: {
          shortURL,
        },
      });
      if (url) {
        return res.json(url);
      }
      console.error("KEY not found");

      return res.sendStatus(404);
    } catch (error: any) {
      console.error(error.error.message);
      res.status(400).send(error.message);
    }
  }
}
