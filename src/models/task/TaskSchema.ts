import { z } from "zod";

export const SubTaskSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  isCompleted: z.boolean(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
});
export type SubTaskDTO = z.infer<typeof SubTaskSchema>;

// -----------------------------------------------------------------------

export const TaskSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  isCompleted: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  type: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  hasReminder: z.boolean().optional(),
  subTasks: z.array(SubTaskSchema).optional(),
  notes: z.array(z.string()).optional(),
});
export type TaskDTO = z.infer<typeof TaskSchema>;

// -----------------------------------------------------------------------
