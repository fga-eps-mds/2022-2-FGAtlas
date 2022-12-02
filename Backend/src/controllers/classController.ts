import { RequestHandler } from "express";
import prisma from "../prismaClient";

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

export default { readOneClass, readClasses, readBySubject };
