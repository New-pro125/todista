import z from "zod"
export const topicSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(3, {message: "Topic must be at least 30 characters long"})
    .max(50, {
      message: "Topic must at most 50 characters long",
    }),
  flashCardId: z.string(),
  deleted: z.boolean(),
  createdAt: z.date(),
})
export type Topic = z.infer<typeof topicSchema>
