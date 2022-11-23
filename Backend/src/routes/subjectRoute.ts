import { Router } from "express";
import controller from "../controllers/subjectController";

const routes = Router();

routes.get("/", controller.readSubjects);
routes.get("/:title", controller.readOneSubject);

export default routes;
