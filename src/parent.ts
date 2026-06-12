import { z } from "zod";

export const RelationshipSchema = z.enum(["부", "모", "조부모", "사촌"]);
export type Relationship = z.infer<typeof RelationshipSchema>;
export const relationships: Relationship[] = ["부", "모", "조부모", "사촌"];

export const ParentEntitySchema = z.object({
  id: z.uuid(),
  academy_id: z.uuid(),
  name: z.string(),
  mobile: z.string().length(11).startsWith("010"),
  relationships: RelationshipSchema.or(z.string()),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ParentEntity = z.infer<typeof ParentEntitySchema>;

export const ParentSchema = ParentEntitySchema.omit({ academy_id: true });

export type Parent = z.infer<typeof ParentSchema>;

export const ParentPayloadSchema = ParentSchema.omit({
  created_at: true,
  updated_at: true,
});

export type ParentPayload = z.infer<typeof ParentPayloadSchema>;

export const ParentUpdatePayloadSchema = z.object({
  target: ParentPayloadSchema.keyof(),
  value: z.any(),
});

export type ParentUpdatePayload = z.infer<typeof ParentUpdatePayloadSchema>;
