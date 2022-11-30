import { RequestHandler } from "express";
import prisma from "../prismaClient";

const createBuilding : RequestHandler = async (req, res) => {
    const { name, latitude, longitude } = req.body;  
};

const readBuilding : RequestHandler = async (req, res) => {
    const building = await prisma.post.findMany();
    return res.json(building);
};

const readOneBuilding : RequestHandler = async (req, res) => {
    const { name } = req.params;
    const building = await prisma.post.findMany({ where: { name } });
    return res.json(building);
};
  
const updateBuilding: RequestHandler = async (req, res) => {
    const { identification } = req.params;
    await prisma.post.update({ where: { name } });
    return res.sendStatus(200);
};
  
const deleteBuilding: RequestHandler = async (req, res) => {
    const { identification } = req.params;
    await prisma.post.deleteMany({ where: { name } });
    return res.sendStatus(200);
};
  
  export default { createBuilding, readBuilding, readOneBuilding, updateBuilding, deleteBuilding };
  