import { RequestHandler } from "express";
import HttpError from "http-errors";
import prisma from "../prismaClient";

const readBuildings: RequestHandler = async (req, res) => {
  const buildings = await prisma.building.findMany({
    select: { name: true, latitude: true, longitude: true, rooms: true },
  });
  return res.json(buildings);
};

const readOneBuilding: RequestHandler = async (req, res) => {
  const { name } = req.params;
  const building = await prisma.building.findMany({ where: { name } });
  if (building.length === 0) {
    throw new HttpError.NotFound();
  }
  return res.json(building);
};

export default { readBuildings, readOneBuilding };
