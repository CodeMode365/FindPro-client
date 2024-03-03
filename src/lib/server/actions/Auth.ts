"use server";

import prisma from "@/lib/server/db";
import {
  asyncHandler,
  generateErrorRes,
  generateSuccessRes,
} from "@/lib/server/common";
import { actionResponseType } from "@/lib/types/response";
import { loginSchema, userSchema } from "@/lib/server/Schemas";
import { compareWithHash, generateHash } from "../serverUtils/bcrypt.utils";
import { createSession } from "./Session";
import _ from "lodash";

export const userLogin = asyncHandler(
  async (formData: FormData): Promise<actionResponseType> => {
    const { email, password } = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    const validatedFields = loginSchema.safeParse({
      email,
      password,
    });
    if (!validatedFields.success) {
      return generateErrorRes(
        validatedFields.error.flatten().formErrors.toString()
      );
    }
    const findUser = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        firstname: true,
        lastname: true,
        password: true,
      },
    });
    if (!findUser) {
      return generateErrorRes("Credentials User!");
    }
    if (!(await compareWithHash(password, findUser.password))) {
      return generateErrorRes("Password didn't match!");
    }
    const { data, message, success } = await createSession(findUser.id);
    if (!success) {
      return generateErrorRes(message);
    }
    return generateSuccessRes({
      user: _.omit(findUser, ["password"]),
      token: data.token,
    });
  }
);

export const createUser = asyncHandler(
  async (formData: FormData): Promise<actionResponseType> => {
    const { firstname, lastname, email, password } = Object.fromEntries(
      formData.entries()
    ) as {
      email: string;
      password: string;
      firstname: string;
      lastname: string;
    };
    const validatedFields = userSchema.safeParse({
      email,
      firstname,
      lastname,
      password,
    });
    if (!validatedFields.success) {
      return generateErrorRes(
        validatedFields.error.flatten().formErrors.toString()
      );
    }
    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (existingUser) return generateErrorRes("Email already taken");
    const newUser = await prisma.user.create({
      data: {
        email,
        firstname,
        lastname,
        password: await generateHash(password),
        lastLoginDate: new Date(),
      },
      select: {
        id: true,
        email: true,
        firstname: true,
        lastname: true,
      },
    });

    if (!newUser) {
      return generateErrorRes("User registration failed!");
    }
    const { data, message, success } = await createSession(newUser.id);
    if (!success) {
      return generateErrorRes(message);
    }
    return generateSuccessRes({ user: newUser, token: data.token });
  }
);
