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


//LER 1
const readOneClass: RequestHandler = async (req, res) => {
  const { idClass } = req.params;

  const _class = await prisma.class.findMany({
    where: { idClass }
  });

  return res.json(_class);
}

//LER TODAS
const readClasses: RequestHandler = async (req, res) => {

  const classes = await prisma.class.findMany();

  return res.json(classes);
}

//LER TODAS (POR SUBJECT)
const readBySubject: RequestHandler = async (req, res) => {
  const { subjectCodeId } = req.params;

  const classes = await prisma.class.findmany({
    where: {subjectCodeId}
  });

  return res.json(classes);
}


export default { linkToUser, readOneClass, readClasses, readBySubject };