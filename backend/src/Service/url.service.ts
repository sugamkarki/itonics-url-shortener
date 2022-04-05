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
    url.shortURL = nanoid();
    const result = await Url.save(url);
    return result;
  }

  async getAllURL() {
    try {
      const urls = await Url.find();
      return urls;
    } catch (error: any) {
      console.error(error.error.message);
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
      return url;
    } else {
      throw new Error("KEY not found");
    }
  }
}
