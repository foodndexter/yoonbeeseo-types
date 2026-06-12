import { z } from "zod";

export const SchoolSortSchema = z.enum([
  "PRE",
  "PRIMARY",
  "MIDDLE",
  "HIGH",
  "UNI",
  "WORK",
]);
export type SchoolSort = z.infer<typeof SchoolSortSchema>;
export const schoolSorts: SchoolSort[] = [
  "PRE",
  "PRIMARY",
  "MIDDLE",
  "HIGH",
  "UNI",
  "WORK",
];

export const SchoolSortKorSchema = z.enum([
  "유치원",
  "초등학교",
  "중학교",
  "고등학교",
  "대학교",
  "직장",
]);

export type SchoolSortKor = z.infer<typeof SchoolSortKorSchema>;
export const schoolSortsKor: SchoolSortKor[] = [
  "유치원",
  "초등학교",
  "중학교",
  "고등학교",
  "대학교",
  "직장",
];

export const SchoolEntitySchema = z.object({
  id: z.uuid(),
  academy_id: z.uuid(),
  name: z.string(),
  sort: SchoolSortSchema.or(z.string()),
  created_at: z.date(),
  updated_at: z.date(),
});

export type SchoolEntity = z.infer<typeof SchoolEntitySchema>;

export const StudentSchoolDescSchema = z.enum([
  "1학년",
  "2학년",
  "3학년",
  "4학년",
  "5학년",
  "6학년",
]);

export type StudentSchoolDesc = z.infer<typeof StudentSchoolDescSchema>;
export const schoolDescs: StudentSchoolDesc[] = [
  "1학년",
  "2학년",
  "3학년",
  "4학년",
  "5학년",
  "6학년",
];

export const SchoolPayloadSchema = SchoolEntitySchema.omit({
  id: true,
  academy_id: true,
  created_at: true,
  updated_at: true,
});
export type SchoolPayload = z.infer<typeof SchoolPayloadSchema>;

export const SchoolUploadPayloadSchema = z.object({
  target: SchoolPayloadSchema.keyof(),
  value: z.any(),
});
export type SchoolUploadPayload = z.infer<typeof SchoolUploadPayloadSchema>;

export const initialSchool: SchoolPayload = {
  name: "",
  sort: "",
};

export const StudentSchoolSchema = SchoolEntitySchema.omit({
  academy_id: true,
}).extend({
  description: StudentSchoolDescSchema.or(z.string()).nullable(),
});

export type StudentSchool = z.infer<typeof StudentSchoolSchema>;

export const StudentSchoolPayloadSchema = StudentSchoolSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export type StudentSchoolPayload = z.infer<typeof StudentSchoolPayloadSchema>;

export const StudentSchoolEntitySchema = z.object({
  school_id: z.uuid(),
  academy_id: z.uuid(),
  description: StudentSchoolDescSchema.or(z.string()).nullable(),
});

export type StudentSchoolEntity = z.infer<typeof StudentSchoolEntitySchema>;

export const StudentSchoolUploadPayloadSchema = z.object({
  target: StudentSchoolEntitySchema.keyof(),
  value: z.any(),
});

export type StudentSchoolUploadPayload = z.infer<
  typeof StudentSchoolUploadPayloadSchema
>;

export const initialStudentSchool: StudentSchoolPayload = {
  description: "",
  name: "",
  sort: "",
};
