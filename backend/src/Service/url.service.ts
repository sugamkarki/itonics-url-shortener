import { nanoid } from "nanoid";
import { Url } from "../entity/url.entity";
export class UrlService {
  constructor() {}

  async createURL(originalUrl: string) {
    console.log(originalUrl);
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
      throw new Error("Something bad happened");
    }
  }
  async getOriginalUrl(shortURL: string) {
    const url = await Url.findOne({
      where: {
        shortURL,
      },
    });
    if (url) {
      console.log("url found!!");
      return url;
    } else {
      console.log("not found!!!");
      throw new Error("KEY not found");
    }
  }
}
