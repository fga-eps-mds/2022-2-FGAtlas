import { Router } from "express";
import postRoute from "./postRoute";
import subjectRoute from "./subjectRoute";

const routes = Router();

routes.use("/post", postRoute);
routes.use("/subject", subjectRoute);

export default routes;
