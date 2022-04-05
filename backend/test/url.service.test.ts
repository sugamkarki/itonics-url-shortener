import { UrlService } from "../src/Service/url.service";
import connection from "./connection";
const urlService = new UrlService();
describe("URL Test", function () {
  beforeAll(async () => {
    // await createConnection();
    await connection.create();
  });
  afterAll(async () => {
    await connection.close();
  });
  it("PASS should create a new URL", async () => {
    const url = {
      originalURL: "http://www.google.com",
      shortURL: "12345",
    };
    const result = await urlService.createURL(url.originalURL);
    console.log(result);
    expect(result.originalURL).toEqual(url.originalURL);
    expect(result.shortURL).toBeTruthy();
  });
  it("PASS should Get the URL from the key", async () => {
    const url = {
      originalURL: "http://www.google.com",
      shortURL: "_KNOSsJLTvVEjvuvO7r-2",
    };
    const result = await urlService.getOriginalUrl(url.shortURL);
    expect(result.originalURL).toEqual(url.originalURL);
  });
  it("FAILED should create a new URL", async () => {
    const url = {
      originalURL: "",
      shortURL: "12345",
    };
    await expect(urlService.createURL(url.originalURL)).rejects.toThrow(
      new Error("Please enter a valid URL")
    );
  });
  it("FAILED should Get the URL from the key", async () => {
    const url = {
      originalURL: "http://www.google.com",
      shortURL: "-2",
    };

    await expect(urlService.getOriginalUrl(url.shortURL)).rejects.toThrow(
      new Error("KEY not found")
    );
  });
});
