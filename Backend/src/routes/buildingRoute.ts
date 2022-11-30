import { Router } from "express";
import controller from "../controllers/buildingController";

const routes = Router();

routes.post("/", controller.createBuilding);
routes.get("/", controller.readBuilding);
routes.get("/:name", controller.readOneBuilding);
routes.patch("/:name", controller.updateBuilding);
routes.delete("/:name", controller.deleteBuilding);

export default routes;