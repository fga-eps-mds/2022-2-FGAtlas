import { RequestHandler } from "express";
import prisma from "../prismaClient";

const readSubjects: RequestHandler = async (req, res) => {
  const subjects = await prisma.subject.findMany();
  return res.json(subjects);
};

const readOneSubject: RequestHandler = async (req, res) => {
  const { codeId } = req.params;
  const subjects = await prisma.subject.findMany({ where: { codeId } });
  return res.json(subjects);
};

export default { readSubjects, readOneSubject };
