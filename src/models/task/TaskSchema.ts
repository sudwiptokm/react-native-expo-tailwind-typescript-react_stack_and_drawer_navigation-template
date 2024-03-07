import { z } from "zod";

export const TaskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  completed: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  type: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
});

export type TaskDTO = z.infer<typeof TaskSchema>;
