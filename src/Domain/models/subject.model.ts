import z from "zod"

export const subjectSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(3, {message: "Subject Length must be more than 2 characters"})
    .max(50, {message: "Subject Length must be less than 51 characters"}),
  topicId: z.string(),
  createdAt: z.date(),
  deleted: z.boolean(),
})

export type Subject = z.infer<typeof subjectSchema>
