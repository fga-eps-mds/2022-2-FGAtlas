import { RequestHandler } from "express";
import prisma from "../prismaClient";

const readBuilding : RequestHandler = async (req, res) => {
    const building = await prisma.building.findMany({select:{name:true,latitude:true,longitude:true}});
    return res.json(building);
};

const readOneBuilding : RequestHandler = async (req, res) => {
    const { name } = req.params;
    const building = await prisma.building.findMany({ where: { name } });
    return res.json(building);
};

const readRooms : RequestHandler =  async (req, res) => {
    const {buildingname} = req.params;
    const rooms = await prisma.room.findMany({where:{buildingname}})
    return res.json(rooms);
}

export default { readBuilding, readOneBuilding, readRooms };
  