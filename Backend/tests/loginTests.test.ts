import req from "supertest";
import { User } from "@prisma/client";
import { differenceInSeconds } from "date-fns";
import { v4 as uuid } from "uuid";
import server from "../src/server";
import { resetDatabase } from "./utilities";

describe("Login tests", () => {
  const userToRegister: User = {
    matricula: uuid(),
    email: "example@email.com",
    password: "password",
  };

  beforeAll(async () => {
    await resetDatabase();
  });

  it("should register a new user and make login", async () => {
    const response = await req(server).post("/auth/register").send({
      matricula: userToRegister.matricula,
      email: userToRegister.email,
      password: userToRegister.password,
    });

    expect(response.status).toBe(201);

    const loginResponse = await req(server).post("/auth/login").send({
      matricula: userToRegister.matricula,
      password: userToRegister.password,
    });

    expect(loginResponse.status).toBe(200);

    const cookieJar = loginResponse.header["set-cookie"];

    expect(cookieJar).toBeDefined();
    expect(cookieJar.length).toBe(1);

    const cookie = cookieJar[0];

    expect(cookie.startsWith("session=")).toBeTruthy();
    expect(cookie.includes("HttpOnly")).toBeTruthy();

    const expiresStart = cookie.indexOf("Expires=");
    const expiresEnd = cookie.indexOf(";", expiresStart);
    const expires = cookie.substring(expiresStart + 8, expiresEnd);
    const expiresDate = new Date(expires).getTime();
    const now = Date.now();

    expect(differenceInSeconds(expiresDate, now)).toBeLessThanOrEqual(60);

    const apiRootResponse = await req(server).get("/api").set("Cookie", cookieJar);

    expect(apiRootResponse.status).toBe(200);
  });
});
