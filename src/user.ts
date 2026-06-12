import { z } from "zod";
import { UserAcademySchema } from "./academy";

export const UserRoleSchema = z.enum(["BIZ", "STUDENT", "TEACHER", "PARENT"]);
export type UserRole = z.infer<typeof UserRoleSchema>;
export const userRoles: UserRole[] = ["BIZ", "STUDENT", "TEACHER", "PARENT"];

export const YoonbeeseoUserEntitySchema = z.object({
  uid: z.uuid(),
  email: z.email(),
  mobile: z.string().length(11).startsWith("010"),
  name: z.string(),
  dob: z.string().length(8).nullable(),
});

export type YoonbeeseoUserEntity = z.infer<typeof YoonbeeseoUserEntitySchema>;

export const YoonbeeseoUserSchema = YoonbeeseoUserEntitySchema.extend({
  roles: z.array(UserRoleSchema),
  academies: z.array(UserAcademySchema),
});

export type YoonbeeseoUser = z.infer<typeof YoonbeeseoUserSchema>;
