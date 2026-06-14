import { z } from "zod";
import { UserAcademySchema } from "./academy";

export const UserRoleSchema = z.enum(["BIZ", "STUDENT", "TEACHER", "PARENT"]);
export type UserRole = z.infer<typeof UserRoleSchema>;
export const userRoles: UserRole[] = ["BIZ", "STUDENT", "TEACHER", "PARENT"];

export const YoonbeeseoUserEntitySchema = z.object({
  uid: z.uuid(),
  email: z.email().nullable(),
  mobile: z.string().length(11).startsWith("010"),
  name: z.string(),
  dob: z.string().length(8).nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type YoonbeeseoUserEntity = z.infer<typeof YoonbeeseoUserEntitySchema>;

export const YoonbeeseoUserSchema = YoonbeeseoUserEntitySchema.extend({
  roles: z.array(UserRoleSchema),
  academies: z.array(UserAcademySchema),
});

export type YoonbeeseoUser = z.infer<typeof YoonbeeseoUserSchema>;

export const YoonbeeseoUserPayloadSchema = YoonbeeseoUserSchema.omit({
  uid: true,
  created_at: true,
  updated_at: true,
});

export type YoonbeeseoUserPayload = z.infer<typeof YoonbeeseoUserPayloadSchema>;

export const YoonbeeseoUserUploadPayloadSchema = z.object({
  key: YoonbeeseoUserPayloadSchema.keyof(),
  value: z.any(),
});

export type YoonbeeseoUserUploadPayload = z.infer<
  typeof YoonbeeseoUserUploadPayloadSchema
>;

export const UserTokenSchema = z.object({
  id: z.uuid(),
  user_id: z.uuid(),
  refresh_token_hash: z.string(),
  created_at: z.date(),
  logged_in_at: z.date(),
  expires_at: z.date(),
  device_id: z.string(),
  device_name: z.string(),
  platform: z.string(),
});

export type UserToken = z.infer<typeof UserTokenSchema>;

export const UserTokenPayloadSchema = UserTokenSchema.omit({
  id: true,
  created_at: true,
  logged_in_at: true,
});

export type UserTokenPayload = z.infer<typeof UserTokenPayloadSchema>;

export const UserTokenUploadPayloadSchema = z.object({
  target: UserTokenPayloadSchema.keyof(),
  value: z.any(),
});

export const initialUser: YoonbeeseoUserPayload = {
  academies: [],
  dob: null,
  email: null,
  mobile: "",
  name: "",
  roles: [],
};

export const initialUserToken: UserTokenPayload = {
  device_id: "",
  device_name: "",
  expires_at: new Date(),
  platform: "",
  refresh_token_hash: "",
  user_id: "",
};
