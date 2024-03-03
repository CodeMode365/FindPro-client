"use server";

import prisma from "@/lib/server/db";
import { actionResponseType } from "@/lib/types/response";
import {
  asyncHandler,
  generateErrorRes,
  generateSuccessRes,
} from "@/lib/server/common";
import { generateToken, verifyToken } from "../serverUtils/jwt.utils";

export const createSession = asyncHandler(
  async (userId: string): Promise<actionResponseType> => {
    try {
      const newSession = await prisma.session.create({
        data: {
          token: generateToken(userId),
          userId: userId,
        },
      });
      return generateSuccessRes({ token: newSession.token });
    } catch (error: any) {
      return generateErrorRes(String(error.message));
    }
  }
);

export const validateSession = asyncHandler(
  async (token: string): Promise<actionResponseType> => {
    const findSession = await prisma.session.findFirst({
      where: {
        token,
      },
    });
    if (!findSession) {
      return generateErrorRes("Invalid session!");
    }
    if (!verifyToken(token)) {
      return generateErrorRes("Session has expired!");
    }
    return generateSuccessRes({ token });
  }
);

export const deleteSession = asyncHandler(
  async (sessionId: string): Promise<actionResponseType> => {
    await prisma.session.deleteMany({
      where: {
        id: sessionId,
      },
    });
    return generateSuccessRes(null);
  }
);
