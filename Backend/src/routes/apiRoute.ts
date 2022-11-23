import { Router } from "express";
import postRoute from "./postRoute";
import subjectRoute from "./subjectRoute";
import userRoute from "./userRoute";

const routes = Router();

routes.get("/", (req, res) =>
  res.send(`Welcome to the API, the logged in user's email is: ${req.user?.email}!`)
);

routes.use("/post", postRoute);
routes.use("/subject", subjectRoute);
routes.use("/user", userRoute);

export default routes;
