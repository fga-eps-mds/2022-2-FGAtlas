import express from "express";
import "express-async-errors";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";
import { NODE_ENV } from "./utils/env";
import handlePrismaError from "./middlewares/handlePrismaError";
import handleCommonError from "./middlewares/handleCommonError";

const server = express();

if (NODE_ENV !== "production") {
  server.use(morgan("dev"));
}

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use(routes);

server.use(handlePrismaError);
server.use(handleCommonError);

export default server;
