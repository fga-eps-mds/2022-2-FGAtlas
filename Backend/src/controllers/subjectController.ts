import { RequestHandler } from "express";
import HttpError from "http-errors";
import prisma from "../prismaClient";

const readSubjects: RequestHandler = async (req, res) => {
  const subjects = await prisma.subject.findMany({
    select: { name: true, codeId: true, Class: true },
    orderBy: { name: "asc" },
  });
  return res.json(subjects);
};

const readOneSubject: RequestHandler = async (req, res) => {
  const { codeId } = req.params;
  const subject = await prisma.subject.findMany({
    where: { codeId },
    select: { name: true, codeId: true, Class: true },
  });
  if (subject.length === 0) {
    throw new HttpError.NotFound();
  }
  return res.json(subject);
};

export default { readSubjects, readOneSubject };
