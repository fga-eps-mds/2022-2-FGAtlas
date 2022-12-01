import { RequestHandler } from "express";
import prisma from "../prismaClient";

const readRoom : RequestHandler = async (req, res) => {
    const room = await prisma.room.findMany();
    return res.json(room);
};

const readOneRoom : RequestHandler = async (req, res) => {
    const { identification } = req.params;
    const room = await prisma.room.findMany({ where: { identification } });
    return res.json(room);
};
  
const readRoomLevel : RequestHandler = async (req, res) => {
    const { level } = req.params;
    const room = await prisma.room.findMany({ where: { level: parseInt(level) } });
    return res.json(room);
};

const readClass : RequestHandler = async (req, res) => {
    const { id } = req.params;
    const classes = await prisma.class.findMany({ where: { id: parseInt(id) } });

    return res.json(classes);
}

const readSubject : RequestHandler = async (req, res) => {
    const { codeId } = req.params;
    const subjects = await prisma.subject.findMany({ where: { codeId } });
    
    return res.json(subjects);
}

  export default { readRoom, readOneRoom, readRoomLevel, readClass, readSubject };
  