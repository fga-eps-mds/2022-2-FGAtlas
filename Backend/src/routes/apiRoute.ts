import { Router } from "express";
import classRoute from "./classRoute";
import postRoute from "./postRoute";
import subjectRoute from "./subjectRoute";
import userRoute from "./userRoute";

const routes = Router();

routes.get("/", (req, res) => res.send(`Welcome to the API`));

routes.use("/post", postRoute);
routes.use("/subject", subjectRoute);
routes.use("/user", userRoute);
routes.use("/class", classRoute);

export default routes;
