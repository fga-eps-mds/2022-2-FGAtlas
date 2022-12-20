import { RequestHandler } from "express";
import HttpError from "http-errors";
import prisma from "../prismaClient";

const readRoom: RequestHandler = async (req, res) => {
  const room = await prisma.room.findMany({
    select: {
      buildingName: true,
      latitude: true,
      longitude: true,
      class: true,
      level: true,
      identification: true,
    },
  });
  return res.json(room);
};

const readOneRoom: RequestHandler = async (req, res) => {
  const { identification } = req.params;
  const room = await prisma.room.findMany({
    where: { identification },
    select: {
      buildingName: true,
      latitude: true,
      longitude: true,
      class: true,
      level: true,
      identification: true,
    },
  });

  if (room.length === 0) {
    throw new HttpError.NotFound();
  }
  return res.json(room);
};

export default { readRoom, readOneRoom };
