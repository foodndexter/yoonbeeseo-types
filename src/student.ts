import { z } from "zod";
import { LessonSchema } from "./lesson";
import { StudentSchoolSchema } from "./school";
import { ParentSchema } from "./parent";

export const StudentEntitySchema = z.object({
  id: z.uuid(),
  academy_id: z.uuid(),
  name: z.string(),
  dob: z.string().length(8).nullable(),
  mobile: z.string().length(11).startsWith("010"),
  payment_date: z.number().min(1).max(31),
  enrolled_at: z.date(),
  discharged_at: z.date().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type StudentEntity = z.infer<typeof StudentEntitySchema>;

export const PaymentMethodSchema = z.enum(["CARD", "BANK_TRANSFER", "CASH"]);
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
export const paymentMehods: PaymentMethod[] = ["CARD", "BANK_TRANSFER", "CASH"];

export const PaymentEntitySchema = z.object({
  id: z.uuid(),
  academy_id: z.uuid(),
  title: z.string(),
  desc: z.string().nullable(),
  issued_at: z.date(),
  billing_at: z.date(),
  paid_at: z.date().nullable(),
  payment_methos: PaymentMethodSchema.nullable(),
  total_amount: z.string(),
  updated_at: z.date(),
  payment_id: z.uuid().nullable(),
});

export type PaymentEntity = z.infer<typeof PaymentEntitySchema>;

export const StudentPaymentEntitySchema = z.object({
  payment_id: z.uuid(),
  student_id: z.uuid(),
});

export type StudentPaymentEntity = z.infer<typeof StudentPaymentEntitySchema>;

export const PaymentItemEntitySchema = z.object({
  id: z.uuid(),
  payment_id: z.uuid(),
  title: z.string(),
  quan: z.number().min(1),
  amount: z.string(),
});

export type PaymentItemEntity = z.infer<typeof PaymentItemEntitySchema>;

export const PaymentItemPayloadSchema = PaymentItemEntitySchema.omit({
  payment_id: true,
  id: true,
});
export type PaymentItemPayload = z.infer<typeof PaymentItemPayloadSchema>;

export const PaymentItemSchema = PaymentItemEntitySchema.omit({
  payment_id: true,
});
export type PaymentItem = z.infer<typeof PaymentItemSchema>;

export const PaymentPayloadSchema = PaymentEntitySchema.omit({
  id: true,
  issued_at: true,
  updated_at: true,
}).extend({
  items: z.array(PaymentItemPayloadSchema),
});

export type PaymentPayload = z.infer<typeof PaymentPayloadSchema>;

export const PaymentUpdatePayloadSchema = z.object({
  target: PaymentPayloadSchema.keyof(),
  value: z.any(),
});
export type PaymentUpdatePayload = z.infer<typeof PaymentUpdatePayloadSchema>;

export const PaymentSchema = PaymentEntitySchema.omit({
  academy_id: true,
}).extend({
  items: z.array(PaymentItemSchema),
});

export const UserStudentSchema = StudentEntitySchema.omit({
  academy_id: true,
}).extend({
  payments: z.array(PaymentSchema),
  lessons: z.array(LessonSchema),
  schools: z.array(StudentSchoolSchema),
  parents: z.array(ParentSchema),
});

export type UserStudent = z.infer<typeof UserStudentSchema>;

export const StudentPayloadSchema = UserStudentSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export type StudentPayload = z.infer<typeof StudentPayloadSchema>;

export const StudentUpdatePayloadSchema = z.object({
  target: StudentPayloadSchema.keyof(),
  value: z.any(),
});
export type StudentUpdatePayload = z.infer<typeof StudentUpdatePayloadSchema>;
