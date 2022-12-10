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

  const newClass = {
    id: classOne[0].id,
    idClass: classOne[0].idClass,
    subjectCodeId: classOne[0].subjectCodeId,
    teacher: classOne[0].teacher,
    room: classOne[0].room,
    day: hourAndDay.parseDay(classOne[0].timeAndDay),
    time: hourAndDay.parseHour(classOne[0].timeAndDay),
  };

  return res.json(newClass);
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

  const newClass = classes.map((classOne) => ({
    id: classOne.id,
    idClass: classOne.idClass,
    subjectCodeId: classOne.subjectCodeId,
    teacher: classOne.teacher,
    room: classOne.room,
    day: hourAndDay.parseDay(classOne.timeAndDay),
    time: hourAndDay.parseHour(classOne.timeAndDay),
  }));

  return res.json(newClass);
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

  const newClass = classes.map((classOne) => ({
    id: classOne.id,
    idClass: classOne.idClass,
    subjectCodeId: classOne.subjectCodeId,
    teacher: classOne.teacher,
    room: classOne.room,
    day: hourAndDay.parseDay(classOne.timeAndDay),
    time: hourAndDay.parseHour(classOne.timeAndDay),
  }));

  return res.json(newClass);
};

export default { readOneClass, readClasses, readBySubject };
