import { Router } from "express";
import controller from "../controllers/userController";

const routes = Router();

routes.get("/", controller.listUsers);
routes.get("/:email", controller.retrieveUser);
routes.get("/class/:email", controller.listClasses);
routes.patch("/:email", controller.linkName);
routes.patch("/rPassword/:email", controller.resetPassword);
routes.delete("/:email", controller.deleteUser);

export default routes;
