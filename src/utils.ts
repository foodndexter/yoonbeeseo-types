import { z } from "zod";

export const mobileValidator = (mobile: string) => {
  if (!mobile) return "";
  const { data, success, error } = z.number().safeParse(mobile);

  if (!mobile.startsWith("010")) return "";
};
