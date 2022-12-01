import { Router } from "express";
import controller from "../controllers/roomController";

const routes = Router();

routes.get("/", controller.readRoom);
routes.get("/:identification", controller.readOneRoom);
routes.get("/level/:level", controller.readRoomLevel);
routes.get("/building/:buildingName", controller.readRoomPerBuilding);

export default routes;
