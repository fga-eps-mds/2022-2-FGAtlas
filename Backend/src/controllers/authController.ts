import { Request, RequestHandler, Response } from "express";
import { authenticate } from "../middlewares/authMiddlewares";
import prisma from "../prismaClient";

interface UserCreateDto {
  matricula: string;
  email: string;
  password: string;
}

const login = [
  authenticate,
  async (req: Request, res: Response) => res.send("Login efetuado com sucesso"),
];

const logout: RequestHandler = (req, res) =>
  req.logout(() => res.send("Logout efetuado com sucesso"));

const register: RequestHandler = async (req, res) => {
  const { matricula, email, password } = req.body as UserCreateDto;

  const user = await prisma.user.create({
    data: {
      matricula,
      email,
      password,
    },
    select: {
      matricula: true,
      email: true,
    },
  });

  return res.status(201).json(user);
};

export default { login, logout, register };
