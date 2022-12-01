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

const readOneClass: RequestHandler = async (req, res) => {
  const { idClass } = req.params;
  const id = parseInt(idClass, 10);

  const classOne = await prisma.class.findMany({
    where: { id },
  });

  return res.json(classOne);
};

const readClasses: RequestHandler = async (req, res) => {
  const classes = await prisma.class.findMany();

  return res.json(classes);
};

const readBySubject: RequestHandler = async (req, res) => {
  const { subjectCodeId } = req.params;

  const classes = await prisma.class.findMany({
    where: { subjectCodeId },
  });

  return res.json(classes);
};

export default { linkToUser, readOneClass, readClasses, readBySubject };
