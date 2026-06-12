import { z } from "zod";

export const LessonSortSchema = z.enum([
  "PRE",
  "PRIMARY",
  "INTER_MEDIATE",
  "HIGH",
  "ADULT",
]);
export type LessonSort = z.infer<typeof LessonSortSchema>;
export const lessonSorts: LessonSort[] = [
  "PRE",
  "PRIMARY",
  "INTER_MEDIATE",
  "HIGH",
  "ADULT",
];

export const LessonSortKorSchema = z.enum([
  "유치부",
  "초등부",
  "중등부",
  "고등부",
  "성인부",
]);
export type LessonSortKor = z.infer<typeof LessonSortKorSchema>;
export const LessonSortsKor: LessonSortKor[] = [
  "유치부",
  "초등부",
  "중등부",
  "고등부",
  "성인부",
];

export const LessonEntitySchema = z.object({
  id: z.uuid(),
  academy_id: z.uuid(),
  name: z.string(),
  sort: LessonSortSchema,
  subject: z.string(),
  price: z.number().min(0),
  length_per_lesson: z.number().min(0),
  count_per_week: z.number().min(0),
  count_per_month: z.number().min(1),
  created_at: z.date(),
  updated_at: z.date(),
});

export type LessonEntity = z.infer<typeof LessonEntitySchema>;

export const LessonSchema = LessonEntitySchema.omit({ academy_id: true });

export type Lesson = z.infer<typeof LessonSchema>;

export const LessonPayloadSchema = LessonSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export type LessonPayload = z.infer<typeof LessonPayloadSchema>;

export const LessonUpdatePayloadSchema = z.object({
  target: LessonPayloadSchema.keyof(),
  value: z.any(),
});

export const StudentLessonEntitySchema = z.object({
  student_id: z.uuid(),
  lesson_id: z.uuid(),
});

export type StudentLessonEntity = z.infer<typeof StudentLessonEntitySchema>;
