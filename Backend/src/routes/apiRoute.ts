import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) =>
  res.send(`Welcome to the API, the logged in user's email is: ${req.user?.email}!`)
);

export default routes;
