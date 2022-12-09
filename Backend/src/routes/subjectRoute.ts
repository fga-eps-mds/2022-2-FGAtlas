import { Router } from "express";
import controller from "../controllers/subjectController";

const routes = Router();

routes.get("/", controller.readSubjects);
routes.get("/:codeId", controller.readOneSubject);

export default routes;
