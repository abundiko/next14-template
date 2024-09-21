import { z } from "zod";

export const validators = {
  email: z.string().email("invalid email address"),
  password: z
    .string()
    .min(6, "password too short")
    .max(25, "password too long")
    .regex(/[A-Z]/, "include an uppercase letter")
    .regex(/[a-z]/, "include a lowercase letter")
    .regex(/[0-9]/, "include a number")
    .regex(/[^A-Za-z0-9]/, "include a special character"),
  name: z
    .string()
    .min(2, "must be 2 or more letters")
    .regex(/^[a-zA-Z0-9._-]+$/, "remove spaces and special characters")
    .trim(),
  fullName: z.string().min(2, "name too short"),
  phoneNumber: z
    .string()
    .min(10, "must be 10 or more digits")
    .regex(/^(?:\+44|0)(?:7\d{3}|\d{4})\d{6}$/, "invalid UK phone number"),
  url: z.string(),
  timeHour: z.string().min(4, "invalid time"),
  min3: z.string().min(3, "value too short"),
  date: z.string().min(3, "invalid date"),
  amount: z
    .string()
    .min(1, "invalid amount")
    .regex(/^[0-9]+(\.[0-9]*)?$/, "invalid numeric value"),
  numberOnly: z.string().regex(/^[0-9]+$/, "invalid number"),
};

export default validators;
