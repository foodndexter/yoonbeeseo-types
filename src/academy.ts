import { z } from "zod";

export const AdminRoleSchema = z.enum(["OWNER", "ADMIN", "TEACHER"]);

export type AdminRole = z.infer<typeof AdminRoleSchema>;

export const adminRoles: AdminRole[] = ["OWNER", "ADMIN", "TEACHER"];

export const AdminRoleKorSchema = z.enum(["대표자", "관리자", "선생님"]);

export type AdminRoleKor = z.infer<typeof AdminRoleKorSchema>;

export const adminRolesKor: AdminRoleKor[] = ["대표자", "관리자", "선생님"];

export const AdminEntitySchema = z.object({
  academy_id: z.uuid(),
  user_id: z.uuid(),
  role: AdminRoleSchema,
});

export type AdminEntity = z.infer<typeof AdminEntitySchema>;

export const AcademyAddressSchema = z.object({});

export const AcademyEntitySchema = z.object({
  id: z.uuid(),
  name: z.string(),
  ceo: z.string(),
  regi: z.string().length(10),
  address: AcademyAddressSchema.nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type AcademyEntity = z.infer<typeof AcademyEntitySchema>;

export const UserAcademySchema = AcademyEntitySchema.extend({
  subject: z.array(z.string()),
  emails: z.array(z.email()),
  tels: z.array(z.string()),
  role: AdminRoleSchema,
});

export type UserAcademy = z.infer<typeof UserAcademySchema>;

export const AcademyPayloadSchema = UserAcademySchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export type AcademyPayload = z.infer<typeof AcademyPayloadSchema>;

export const initialAcademy: AcademyPayload = {
  address: null,
  ceo: "",
  emails: [],
  name: "",
  regi: "",
  role: "OWNER",
  subject: [],
  tels: [],
};

export const AcademyUpdatePayloadSchema = z.object({
  target: AcademyPayloadSchema.keyof(),
  value: z.any(),
});

export type AcademyUpdatePayload = z.infer<typeof AcademyUpdatePayloadSchema>;

const academy = `id, name, ceo, regi, address, created_at, updated_at,
                emails:academy_emails(email),
                tels:academy_tels(tel),
                subject:academy_subjects(subject)
                `;
export const academyQuery = {
  academy,
  admin: `${academy}, role:academy_admin(role)`,
};
