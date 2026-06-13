// src/academy.ts
import { z } from "zod";
var AdminRoleSchema = z.enum([
  "OWNER",
  "CO_ONWER",
  "ADMIN",
  "TEACHER"
]);
var adminRoles = [
  "OWNER",
  "CO_ONWER",
  "ADMIN",
  "TEACHER"
];
var AdminRoleKorSchema = z.enum([
  "\uB300\uD45C\uC790",
  "\uACF5\uB3D9\uB300\uD45C",
  "\uAD00\uB9AC\uC790",
  "\uC120\uC0DD\uB2D8"
]);
var adminRolesKor = [
  "\uB300\uD45C\uC790",
  "\uACF5\uB3D9\uB300\uD45C",
  "\uAD00\uB9AC\uC790",
  "\uC120\uC0DD\uB2D8"
];
var AdminEntitySchema = z.object({
  academy_id: z.uuid(),
  user_id: z.uuid(),
  role: AdminRoleSchema
});
var AcademyAddressSchema = z.object({});
var AcademyEntitySchema = z.object({
  id: z.uuid(),
  name: z.string(),
  ceo: z.string(),
  regi: z.string().length(10),
  address: AcademyAddressSchema.nullable(),
  created_at: z.date(),
  updated_at: z.date()
});
var UserAcademySchema = AcademyEntitySchema.extend({
  subject: z.array(z.string()),
  emails: z.array(z.email()),
  tels: z.array(z.string()),
  role: AdminRoleSchema
});
var AcademyPayloadSchema = UserAcademySchema.omit({
  id: true,
  created_at: true,
  updated_at: true
});
var initialAcademy = {
  address: null,
  ceo: "",
  emails: [],
  name: "",
  regi: "",
  role: "OWNER",
  subject: [],
  tels: []
};
var AcademyUpdatePayloadSchema = z.object({
  target: AcademyPayloadSchema.keyof(),
  value: z.any()
});
var academy = `id, name, ceo, regi, address, created_at, updated_at,
                emails:academy_emails(email),
                tels:academy_tels(tel),
                subject:academy_subjects(subject)
                `;
var academyQuery = {
  academy,
  admin: `${academy}, role:academy_admin(role)`
};

// src/lesson.ts
import { z as z2 } from "zod";
var LessonSortSchema = z2.enum([
  "PRE",
  "PRIMARY",
  "INTER_MEDIATE",
  "HIGH",
  "ADULT"
]);
var lessonSorts = [
  "PRE",
  "PRIMARY",
  "INTER_MEDIATE",
  "HIGH",
  "ADULT"
];
var LessonSortKorSchema = z2.enum([
  "\uC720\uCE58\uBD80",
  "\uCD08\uB4F1\uBD80",
  "\uC911\uB4F1\uBD80",
  "\uACE0\uB4F1\uBD80",
  "\uC131\uC778\uBD80"
]);
var LessonSortsKor = [
  "\uC720\uCE58\uBD80",
  "\uCD08\uB4F1\uBD80",
  "\uC911\uB4F1\uBD80",
  "\uACE0\uB4F1\uBD80",
  "\uC131\uC778\uBD80"
];
var LessonEntitySchema = z2.object({
  id: z2.uuid(),
  academy_id: z2.uuid(),
  name: z2.string(),
  sort: LessonSortSchema,
  subject: z2.string(),
  price: z2.number().min(0),
  length_per_lesson: z2.number().min(0),
  count_per_week: z2.number().min(0),
  count_per_month: z2.number().min(1),
  created_at: z2.date(),
  updated_at: z2.date()
});
var LessonSchema = LessonEntitySchema.omit({ academy_id: true });
var LessonPayloadSchema = LessonSchema.omit({
  id: true,
  created_at: true,
  updated_at: true
});
var LessonUpdatePayloadSchema = z2.object({
  target: LessonPayloadSchema.keyof(),
  value: z2.any()
});
var StudentLessonEntitySchema = z2.object({
  student_id: z2.uuid(),
  lesson_id: z2.uuid()
});

// src/parent.ts
import { z as z3 } from "zod";
var RelationshipSchema = z3.enum(["\uBD80", "\uBAA8", "\uC870\uBD80\uBAA8", "\uC0AC\uCD0C"]);
var relationships = ["\uBD80", "\uBAA8", "\uC870\uBD80\uBAA8", "\uC0AC\uCD0C"];
var ParentEntitySchema = z3.object({
  id: z3.uuid(),
  academy_id: z3.uuid(),
  name: z3.string(),
  mobile: z3.string().length(11).startsWith("010"),
  relationships: RelationshipSchema.or(z3.string()),
  created_at: z3.date(),
  updated_at: z3.date()
});
var ParentSchema = ParentEntitySchema.omit({ academy_id: true });
var ParentPayloadSchema = ParentSchema.omit({
  created_at: true,
  updated_at: true
});
var ParentUpdatePayloadSchema = z3.object({
  target: ParentPayloadSchema.keyof(),
  value: z3.any()
});

// src/school.ts
import { z as z4 } from "zod";
var SchoolSortSchema = z4.enum([
  "PRE",
  "PRIMARY",
  "MIDDLE",
  "HIGH",
  "UNI",
  "WORK"
]);
var schoolSorts = [
  "PRE",
  "PRIMARY",
  "MIDDLE",
  "HIGH",
  "UNI",
  "WORK"
];
var SchoolSortKorSchema = z4.enum([
  "\uC720\uCE58\uC6D0",
  "\uCD08\uB4F1\uD559\uAD50",
  "\uC911\uD559\uAD50",
  "\uACE0\uB4F1\uD559\uAD50",
  "\uB300\uD559\uAD50",
  "\uC9C1\uC7A5"
]);
var schoolSortsKor = [
  "\uC720\uCE58\uC6D0",
  "\uCD08\uB4F1\uD559\uAD50",
  "\uC911\uD559\uAD50",
  "\uACE0\uB4F1\uD559\uAD50",
  "\uB300\uD559\uAD50",
  "\uC9C1\uC7A5"
];
var SchoolEntitySchema = z4.object({
  id: z4.uuid(),
  academy_id: z4.uuid(),
  name: z4.string(),
  sort: SchoolSortSchema.or(z4.string()),
  created_at: z4.date(),
  updated_at: z4.date()
});
var StudentSchoolDescSchema = z4.enum([
  "1\uD559\uB144",
  "2\uD559\uB144",
  "3\uD559\uB144",
  "4\uD559\uB144",
  "5\uD559\uB144",
  "6\uD559\uB144"
]);
var schoolDescs = [
  "1\uD559\uB144",
  "2\uD559\uB144",
  "3\uD559\uB144",
  "4\uD559\uB144",
  "5\uD559\uB144",
  "6\uD559\uB144"
];
var SchoolPayloadSchema = SchoolEntitySchema.omit({
  id: true,
  academy_id: true,
  created_at: true,
  updated_at: true
});
var SchoolUploadPayloadSchema = z4.object({
  target: SchoolPayloadSchema.keyof(),
  value: z4.any()
});
var initialSchool = {
  name: "",
  sort: ""
};
var StudentSchoolSchema = SchoolEntitySchema.omit({
  academy_id: true
}).extend({
  description: StudentSchoolDescSchema.or(z4.string()).nullable()
});
var StudentSchoolPayloadSchema = StudentSchoolSchema.omit({
  id: true,
  created_at: true,
  updated_at: true
});
var StudentSchoolEntitySchema = z4.object({
  school_id: z4.uuid(),
  academy_id: z4.uuid(),
  description: StudentSchoolDescSchema.or(z4.string()).nullable()
});
var StudentSchoolUploadPayloadSchema = z4.object({
  target: StudentSchoolEntitySchema.keyof(),
  value: z4.any()
});
var initialStudentSchool = {
  description: "",
  name: "",
  sort: ""
};

// src/student.ts
import { z as z5 } from "zod";
var StudentEntitySchema = z5.object({
  id: z5.uuid(),
  academy_id: z5.uuid(),
  name: z5.string(),
  dob: z5.string().length(8).nullable(),
  mobile: z5.string().length(11).startsWith("010"),
  payment_date: z5.number().min(1).max(31),
  enrolled_at: z5.date(),
  discharged_at: z5.date(),
  created_at: z5.date(),
  updated_at: z5.date()
});
var PaymentMethodSchema = z5.enum(["CARD", "BANK_TRANSFER", "CASH"]);
var paymentMehods = ["CARD", "BANK_TRANSFER", "CASH"];
var PaymentEntitySchema = z5.object({
  id: z5.uuid(),
  academy_id: z5.uuid(),
  title: z5.string(),
  desc: z5.string().nullable(),
  issued_at: z5.date(),
  billing_at: z5.date(),
  paid_at: z5.date().nullable(),
  payment_methos: PaymentMethodSchema.nullable(),
  total_amount: z5.string(),
  updated_at: z5.date(),
  payment_id: z5.uuid().nullable()
});
var StudentPaymentEntitySchema = z5.object({
  payment_id: z5.uuid(),
  student_id: z5.uuid()
});
var PaymentItemEntitySchema = z5.object({
  id: z5.uuid(),
  payment_id: z5.uuid(),
  title: z5.string(),
  quan: z5.number().min(1),
  amount: z5.string()
});
var PaymentItemPayloadSchema = PaymentItemEntitySchema.omit({
  payment_id: true,
  id: true
});
var PaymentItemSchema = PaymentItemEntitySchema.omit({
  payment_id: true
});
var PaymentPayloadSchema = PaymentEntitySchema.omit({
  id: true,
  issued_at: true,
  updated_at: true
}).extend({
  items: z5.array(PaymentItemPayloadSchema)
});
var PaymentUpdatePayloadSchema = z5.object({
  target: PaymentPayloadSchema.keyof(),
  value: z5.any()
});
var PaymentSchema = PaymentEntitySchema.omit({
  academy_id: true
}).extend({
  items: z5.array(PaymentItemSchema)
});
var UserStudentSchema = StudentEntitySchema.omit({
  academy_id: true
}).extend({
  payments: z5.array(PaymentSchema),
  lessons: z5.array(LessonSchema),
  schools: z5.array(StudentSchoolSchema),
  parents: z5.array(ParentSchema)
});
var StudentPayloadSchema = UserStudentSchema.omit({
  id: true,
  created_at: true,
  updated_at: true
});
var StudentUpdatePayloadSchema = z5.object({
  target: StudentPayloadSchema.keyof(),
  value: z5.any()
});

// src/user.ts
import { z as z6 } from "zod";
var UserRoleSchema = z6.enum(["BIZ", "STUDENT", "TEACHER", "PARENT"]);
var userRoles = ["BIZ", "STUDENT", "TEACHER", "PARENT"];
var YoonbeeseoUserEntitySchema = z6.object({
  uid: z6.uuid(),
  email: z6.email(),
  mobile: z6.string().length(11).startsWith("010"),
  name: z6.string(),
  dob: z6.string().length(8).nullable(),
  created_at: z6.date(),
  updated_at: z6.date()
});
var YoonbeeseoUserSchema = YoonbeeseoUserEntitySchema.extend({
  roles: z6.array(UserRoleSchema),
  academies: z6.array(UserAcademySchema)
});
var YoonbeeseoUserPayloadSchema = YoonbeeseoUserSchema.omit({
  uid: true,
  created_at: true,
  updated_at: true
});
export {
  AcademyAddressSchema,
  AcademyEntitySchema,
  AcademyPayloadSchema,
  AcademyUpdatePayloadSchema,
  AdminEntitySchema,
  AdminRoleKorSchema,
  AdminRoleSchema,
  LessonEntitySchema,
  LessonPayloadSchema,
  LessonSchema,
  LessonSortKorSchema,
  LessonSortSchema,
  LessonSortsKor,
  LessonUpdatePayloadSchema,
  ParentEntitySchema,
  ParentPayloadSchema,
  ParentSchema,
  ParentUpdatePayloadSchema,
  PaymentEntitySchema,
  PaymentItemEntitySchema,
  PaymentItemPayloadSchema,
  PaymentItemSchema,
  PaymentMethodSchema,
  PaymentPayloadSchema,
  PaymentSchema,
  PaymentUpdatePayloadSchema,
  RelationshipSchema,
  SchoolEntitySchema,
  SchoolPayloadSchema,
  SchoolSortKorSchema,
  SchoolSortSchema,
  SchoolUploadPayloadSchema,
  StudentEntitySchema,
  StudentLessonEntitySchema,
  StudentPayloadSchema,
  StudentPaymentEntitySchema,
  StudentSchoolDescSchema,
  StudentSchoolEntitySchema,
  StudentSchoolPayloadSchema,
  StudentSchoolSchema,
  StudentSchoolUploadPayloadSchema,
  StudentUpdatePayloadSchema,
  UserAcademySchema,
  UserRoleSchema,
  UserStudentSchema,
  YoonbeeseoUserEntitySchema,
  YoonbeeseoUserPayloadSchema,
  YoonbeeseoUserSchema,
  academyQuery,
  adminRoles,
  adminRolesKor,
  initialAcademy,
  initialSchool,
  initialStudentSchool,
  lessonSorts,
  paymentMehods,
  relationships,
  schoolDescs,
  schoolSorts,
  schoolSortsKor,
  userRoles
};
