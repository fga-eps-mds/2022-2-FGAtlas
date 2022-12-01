import { Router } from "express";
import classRoute from "./classRoute";
import subjectRoute from "./subjectRoute";

const routes = Router();

routes.get("/", (req, res) => res.send(`Welcome to the API`));

routes.use("/subject", subjectRoute);
routes.use("/class", classRoute);

export default routes;
