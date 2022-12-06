import { Router } from "express";
import controller from "../controllers/buildingController";

const routes = Router();

routes.get("/", controller.readBuildings);
routes.get("/:name", controller.readOneBuilding);

export default routes;
