import { Router } from "express";
import postRoute from "./postRoute";
import subjectRoute from "./subjectRoute";

const routes = Router();

routes.get("/", (req, res) =>
  res.send(`Welcome to the API, the logged in user's email is: ${req.user?.email}!`)
);

routes.use("/post", postRoute);
routes.use("/subject", subjectRoute);

export default routes;
