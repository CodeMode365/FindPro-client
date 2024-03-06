import { z } from "zod";

export const userSchema = z
  .object({
    email: z.string({
      required_error: "Email is required",
      invalid_type_error: "Invalid Email",
    }),
    firstname: z.string({ required_error: "Firstname is require!" }),
    lastname: z.string({ required_error: "Lastname is required!" }),
    password: z.string({
      required_error: "Password is required",
      invalid_type_error: "Invalid Password",
    }),
  })
  .partial();