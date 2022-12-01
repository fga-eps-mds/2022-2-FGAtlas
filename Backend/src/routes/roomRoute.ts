import { Router } from "express";
import controller from "../controllers/roomController";

const routes = Router();

routes.get("/", controller.readRoom);
routes.get("/:identification", controller.readOneRoom);
routes.get("/:level", controller.readRoomLevel);
routes.get("/:id", controller.readClass);
routes.get("/:Subject", controller.readSubject);

export default routes;