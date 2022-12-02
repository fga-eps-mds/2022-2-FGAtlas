import { Router } from "express";
import controller from "../controllers/healthChecksController";
import apiRoute from "./apiRoute";

const routes = Router();

routes.get("/life", controller.serverIsAlive);
routes.get("/ready", controller.serverIsReady);

routes.use("/api", apiRoute);

export default routes;
