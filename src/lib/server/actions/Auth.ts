"use server";

import prisma from "@/lib/server/db";
import {
  asyncHandler,
  generateErrorRes,
  generateSuccessRes,
} from "@/lib/server/common";
import _, { find } from "lodash";
import { actionResponseType } from "@/lib/types/response";
import { userSchema } from "@/lib/server/Schemas";
import { compareWithHash, generateHash } from "../serverUtils/bcrypt.utils";
import { createSession } from "@/lib/server/services/session.service";
import { sendVerificationCode } from "@/lib/server/services/mail.service";

export const userLogin = asyncHandler(
  async (formData: FormData): Promise<actionResponseType> => {
    const { email, password } = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    const validatedFields = userSchema.safeParse({ email, password });
    if (!validatedFields.success) {
      return generateErrorRes("Fields Validatin Error!");
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
        verificationStatus: true,
      },
    });
    if (!findUser) {
      return generateErrorRes("Credentials User!");
    }
    if (!(await compareWithHash(password, findUser.password))) {
      return generateErrorRes("Password didn't match!");
    }
    if (findUser.verificationStatus == "UNVERIFIED") {
      await sendVerificationCode(findUser.id);
      return generateSuccessRes({
        message: "Verify your email!",
        email: findUser.email,
      });
    }
    const session = await createSession(findUser.id);
    return generateSuccessRes({
      user: _.omit(findUser, ["password"]),
      token: session.token,
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
    if (!newUser) return generateErrorRes("User registration failed!");
    await sendVerificationCode(newUser.id);
    return generateSuccessRes({
      message: "Verify your email!",
      email: newUser.email,
    });
  }
);

export const verifyEmail = asyncHandler(
  async (email: string, code: string): Promise<actionResponseType> => {
    const validatedFields = userSchema.safeParse({ email });
    if (code.length !== 6)
      return generateErrorRes("Invalid verification code!");
    if (!validatedFields.success)
      return generateErrorRes("Fields Validatin Error!");
    const findUser = await prisma.user.findFirst({
      where: { email },
    });
    if (!findUser) return generateErrorRes("Email not registered!");
    if (findUser.verificationStatus == "VERIFIED")
      return generateSuccessRes("Email already verified!");
    if (
      !findUser.verificationCode ||
      !(await compareWithHash(code, findUser.verificationCode))
    )
      return generateErrorRes("Invalid verification code!");
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        verificationStatus: "VERIFIED",
        verificationCode: null,
      },
    });
    const session = await createSession(findUser.id);
    if (!session) return generateErrorRes("Session generation failed!");
    return generateSuccessRes({
      user: _.pick(findUser, [
        "firstname",
        "lastname",
        "id",
        "email",
        "profilePicture",
      ]),
      token: _.pick(session, ["token"]),
    });
  }
);

export const resendVerificationCode = asyncHandler(
  async (email: string): Promise<actionResponseType> => {
    const findUser = await prisma.user.findFirst({
      where: { email },
    });
    if (!findUser) return generateErrorRes("Please register your account!");
    await sendVerificationCode(findUser.id);
    return generateSuccessRes(null);
  }
);
