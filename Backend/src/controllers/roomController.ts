import { RequestHandler } from "express";
import prisma from "../prismaClient";

const creatRoom : RequestHandler = async (req, res) => {
    const { identification, level, latitude, longitude } = req.body;  
};

const readRoom : RequestHandler = async (req, res) => {
    const room = await prisma.post.findMany();
    return res.json(room);
};


const readOneRoom : RequestHandler = async (req, res) => {
    const { identification } = req.params;
    const { level } = req.params;
    const room = await prisma.post.findMany({ where: { identification }, where: { level } });
    return res.json(room);
};
  
  
const updateRoom: RequestHandler = async (req, res) => {
    const { identification } = req.params;
    await prisma.post.update({ where: { identification } });
    return res.sendStatus(200);
};
  
const deleteRoom: RequestHandler = async (req, res) => {
    const { identification } = req.params;
    await prisma.post.deleteMany({ where: { identification } });
    return res.sendStatus(200);
};
  
  export default { creatRoom, readRoom, readOneRoom, updateRoom, deleteRoom };
  