import { Router } from "express";
import controller from "../controllers/authController";

const routes = Router();

routes.post("/register", controller.register);

routes.post("/login", controller.login);

routes.post("/logout", controller.logout);

export default routes;
