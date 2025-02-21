import z from "zod"

export const todoSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(50, "Title must be at most 50 characters long"),
  description: z
    .string()
    .max(100, "Todo Description must be at most 100 characters long")
    .optional(),
  completed: z.boolean(),
  dueTime: z.date(),
  userId: z.string(),
  createdAt: z.date(),
})

export type Todo = z.infer<typeof todoSchema>
