import { Router } from "express";
import buildingRoute from "./buildingRoute";
import classRoute from "./classRoute";
import roomRoute from "./roomRoute";
import subjectRoute from "./subjectRoute";

const routes = Router();

routes.use("/subject", subjectRoute);
routes.use("/class", classRoute);
routes.use("/building", buildingRoute);
routes.use("/rooms", roomRoute);

export default routes;
