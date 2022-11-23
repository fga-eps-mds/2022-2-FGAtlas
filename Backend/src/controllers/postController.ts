import { RequestHandler } from "express";
import prisma from "../prismaClient";

const createPost: RequestHandler = async (req, res) => {
  const { title, text, data, author } = req.body;
  const post = await prisma.post.create({
    data: {
      author,
      data,
      text,
      title,
    },
  });

  return res.json(post).sendStatus(200);
};

const readPosts: RequestHandler = async (req, res) => {
  const posts = await prisma.post.findMany();
  return res.json(posts);
};

const readOnePost: RequestHandler = async (req, res) => {
  const { title } = req.params;
  const posts = await prisma.post.findMany({ where: { title } });
  return res.json(posts);
};

const updateText: RequestHandler = async (req, res) => {
  const { title } = req.params;
  const { text } = req.body;
  await prisma.post.update({ where: { title }, data: { text } });
  return res.sendStatus(200);
};

const deletePost: RequestHandler = async (req, res) => {
  const { title } = req.params;
  await prisma.post.deleteMany({ where: { title } });
  return res.sendStatus(200);
};

export default { createPost, readPosts, readOnePost, deletePost, updateText };
