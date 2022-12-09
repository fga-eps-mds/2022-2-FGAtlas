import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../../swagger.json";
import controller from "../controllers/healthChecksController";
import apiRoute from "./apiRoute";

const routes = Router();

routes.get("/life", controller.serverIsAlive);
routes.get("/ready", controller.serverIsReady);

routes.use("/api", apiRoute);
routes.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default routes;
