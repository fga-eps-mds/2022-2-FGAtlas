import { Router } from "express";
import controller from "../controllers/roomController";

const routes = Router();

routes.post("/", controller.creatRoom);
routes.get("/", controller.readRoom);
routes.get("/:identification", controller.readOneRoom);
routes.get("/:level", controller.readOneRoom);
routes.patch("/:title", controller.updateRoom);
routes.delete("/:title", controller.deleteRoom);

export default routes;