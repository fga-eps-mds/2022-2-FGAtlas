import { Router } from "express";
import controller from "../controllers/postController";

const routes = Router();

routes.post("/", controller.createPost);
routes.get("/", controller.readPosts);
routes.get("/:title", controller.readOnePost);
routes.patch("/:title", controller.updateText);
routes.delete("/:title", controller.deletePost);

export default routes;
