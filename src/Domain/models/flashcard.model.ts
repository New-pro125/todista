import z from "zod"

export const flashCardSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(50, "Title must be at most 50 characters long"),
  content: z
    .string()
    .min(1, "Flash Card must have some content")
    .max(1000, "Flash card must not exceed 1000 characters"),
  createdAt: z.date(),
  userId: z.string(),
  photos: z.array(
    z.object({
      id: z.string(),
      caption: z
        .string()
        .min(5, "Caption must be at least 5 characters long")
        .max(50, "Caption must be at most 50 characters long"),
    })
  ),
})

export type flashCard = z.infer<typeof flashCardSchema>
