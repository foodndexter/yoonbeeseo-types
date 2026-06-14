export type SupabaseTable =
  | "users"
  | "user_role"
  | "academy"
  | "academy_admin"
  | "academy_school"
  | "academy_lesson"
  | "academy_parent"
  | "academy_subject"
  | "academy_tel"
  | "academy_email"
  | "academy_student"
  | "student_lesson"
  | "student_school"
  | "parent_student"
  | "payment"
  | "student_payment"
  | "payment_item"
  | "user_token";

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type TokenPayload = {
  uid: string;
};

type Ids =
  | "lesson_id"
  | "school_id"
  | "parent_id"
  | "student_id"
  | "payment_id"
  | "academy_id";

export type NextParams<T extends Ids> = {
  params: Promise<{ [Key in T]: Ids }>;
};
