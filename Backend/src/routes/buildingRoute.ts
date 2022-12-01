import { Router } from "express";
import controller from "../controllers/buildingController";

const routes = Router();

routes.get("/", controller.readBuilding);
routes.get("/:name", controller.readOneBuilding);
routes.get("/:buildingname", controller.readRooms);

export default routes;