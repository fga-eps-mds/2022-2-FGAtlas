import { Router } from "express";
import controller from "../controllers/classController";

const routes = Router();

routes.patch("/linkToUser", controller.linkToUser);

routes.get("/", controller.readClasses);
routes.get("/:idClass", controller.readOneClass);
routes.get("/subject/:subjectCodeId", controller.readBySubject);



export default routes;
