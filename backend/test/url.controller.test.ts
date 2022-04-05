import { UrlController } from "../src/Controller/url.controller";
describe("URL Test", function () {
  let urlController: UrlController;
  beforeEach(() => {
    urlController = new UrlController();
  });
  it("should create a new URL", async () => {
    const url = {
      originalURL: "http://www.google.com",
      shortURL: "12345",
    };
    const result = await urlController.createURL(url);
    expect(result).toBe(url);
  });
});
