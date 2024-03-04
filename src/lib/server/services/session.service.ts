import prisma from "@/lib/server/db";
import { generateToken, verifyToken } from "../serverUtils/jwt.utils";

export const createSession = async (userId: string) => {
  const newSession = await prisma.session.create({
    data: {
      token: generateToken(userId),
      userId: userId,
    },
  });
  if (!newSession) throw Error("Error generating session!");
  return newSession;
};

export const validateSession = async (token: string) => {
  const findSession = await prisma.session.findFirst({
    where: {
      token,
    },
  });
  if (!findSession) throw Error("Invalid session!");
  if (!verifyToken(token)) throw Error("Session has expired!");
  return token;
};

export const deleteSession = async (sessionId: string) => {
  await prisma.session.deleteMany({
    where: {
      id: sessionId,
    },
  });
};
