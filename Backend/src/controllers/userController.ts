import { RequestHandler } from "express";
import prisma from "../prismaClient";

const listUsers: RequestHandler = async (req, res) => {
  const users = await prisma.user.findMany({
    select: { id: true, email: true, name: true, isAdmin: true },
  });
  return res.json(users);
};

const retrieveUser: RequestHandler = async (req, res) => {
  const { email } = req.params;
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true, name: true, isAdmin: true },
  });
  return res.json(user);
};

const listClasses: RequestHandler = async (req, res) => {
  const { email } = req.params;
  const classes = await prisma.user.findUnique({ where: { email }, select: { class: true } });
  return res.json(classes);
};

const linkName: RequestHandler = async (req, res) => {
  const { email } = req.params;
  const { name } = req.body;
  await prisma.user.update({ where: { email }, data: { name } });
  return res.sendStatus(200);
};

const resetPassword: RequestHandler = async (req, res) => {
  const { email } = req.params;
  const { password } = req.body;
  await prisma.user.update({ where: { email }, data: { password } });

  return res.sendStatus(200);
};

const deleteUser: RequestHandler = async (req, res) => {
  const { email } = req.params;
  await prisma.user.delete({ where: { email } });
  return res.sendStatus(200);
};

export default { listUsers, retrieveUser, linkName, deleteUser, listClasses, resetPassword };
