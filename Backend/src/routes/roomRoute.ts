import { Router } from "express";
import controller from "../controllers/roomController";

const routes = Router();

routes.get("/", controller.readRoom);
routes.get("/:identification", controller.readOneRoom);

export default routes;
