import { RequestHandler } from "express";
import prisma from "../prismaClient";

const linkToUser: RequestHandler = async (req, res) => {
  const { uuidUser } = req.query;
  const { idClass } = req.query;
  const idC = parseInt(idClass as string, 10);
  const idUser = uuidUser as string;

  await prisma.class.update({
    where: { id: idC },
    data: { User: { connect: { id: idUser } } },
  });

  return res.sendStatus(200);
};

export default { linkToUser };
