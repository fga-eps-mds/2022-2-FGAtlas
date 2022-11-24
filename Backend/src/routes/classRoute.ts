import { Router } from "express";
import controller from "../controllers/classController";

const routes = Router();

routes.patch("/linkToUser", controller.linkToUser);

export default routes;
