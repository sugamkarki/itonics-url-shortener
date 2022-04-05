import { nanoid } from "nanoid";
import { Url } from "../entity/url.entity";
export class UrlService {
  constructor() {}

  async createURL(originalUrl: string) {
    if (!originalUrl) {
      throw new Error("Please enter a valid URL");
    }
    let url: Url = {} as Url;

    url.originalURL = originalUrl;
    console.log(url);
    // if (!url) {
    //   throw "Please enter a valid URL";
    // }
    url.shortURL = nanoid();
    console.log(url);
    console.log("here!!!");
    const result = await Url.save(url);
    //   return res.status(200).json(result);
    console.log(result);
    return result;
  }

  async getAllURL() {
    try {
      const urls = await Url.find();
      //   return res.status(200).json(url);
      return urls;
    } catch (error: any) {
      console.error(error.error.message);
      //   res.status(400).send(error.message);
      throw error.error.message;
    }
  }
  async getOriginalUrl(shortURL: string) {
    try {
      const url = await Url.findOne({
        where: {
          shortURL,
        },
      });
      if (url) {
        return url;
      }
      console.error("KEY not found");
      throw "KEY not found";
    } catch (error: any) {
      console.error(error);
      throw error;
    }
  }
}
