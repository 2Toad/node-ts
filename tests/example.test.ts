import config from "../src/utils/config";
import app from "../src/app";

describe("sayHello", () => {
  it("should return HELLO_WORLD env var value", () => {
    const response = app.sayHello();
    expect(response).toEqual(config.app.helloWorld);
  });
});
