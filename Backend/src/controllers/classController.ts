import { RequestHandler } from "express";
import prisma from "../prismaClient";
import hourAndDay from "../services/generateHourAndDay";



const readOneClass: RequestHandler = async (req, res) => {
  const { idClass } = req.params;
  const id = parseInt(idClass, 10);

  const classOne = await prisma.class.findMany({
    where: { id },
    select: {
      id: true,
      idClass: true,
      subjectCodeId: true,
      teacher: true,
      room: true,
      timeAndDay: true,
    },
  });

  classOne.day = hourAndDay.parseDay(classOne.timeAndDay);
  classOne.time = hourAndDay.parseHour(classOne.timeAndDay);

  return res.json(classOne);
};



const readClasses: RequestHandler = async (req, res) => {
  const classes = await prisma.class.findMany({
    select: {
      id: true,
      idClass: true,
      subjectCodeId: true,
      teacher: true,
      room: true,
      timeAndDay: true,
    },
  });

  classes.day = hourAndDay.parseDay(classes.timeAndDay);
  classes.time = hourAndDay.parseHour(classes.timeAndDay);

  return res.json(classes);
};



const readBySubject: RequestHandler = async (req, res) => {
  const { subjectCodeId } = req.params;

  const classes = await prisma.class.findMany({
    where: { subjectCodeId },
    select: {
      id: true,
      idClass: true,
      subjectCodeId: true,
      teacher: true,
      room: true,
      timeAndDay: true,
    },
  });

  classes.day = hourAndDay.parseDay(classes.timeAndDay);
  classes.time = hourAndDay.parseHour(classes.timeAndDay);

  return res.json(classes);
};

export default { readOneClass, readClasses, readBySubject };
