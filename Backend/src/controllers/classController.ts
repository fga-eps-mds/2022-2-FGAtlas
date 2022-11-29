import { RequestHandler } from "express";
import prisma from "../prismaClient";

const linkToUser: RequestHandler = async (req, res) => {
  const { uuidUser } = req.query;
  const { idClass } = req.body;
  const idUser = uuidUser as string;

  await prisma.user.update({
    where: { id: idUser },
    data: {
      class: {
        connect: idClass.map((id: number) => ({
          id,
        })),
      },
    },
  });

  return res.sendStatus(200);
};

export default { linkToUser };
