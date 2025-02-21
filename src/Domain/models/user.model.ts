import z from "zod"
export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),

  username: z
    .string()
    .min(5, "Username must be at least 5 characters long")
    .max(14, "Username must be at most 14 characters long"),
  phoneNumber: z.string(), // ?? TODO: Refine the Phone Number with Strict Rules
  birthDate: z.date(),
  createdAt: z.date(),
  password: z.string().min(8).max(25), // ?? TODO: Refine the Passwordd
  deleted: z.boolean(),
})

export type User = z.infer<typeof userSchema>

export const userCreateSchema = userSchema.pick({
  name: true,
  email: true,
  username: true,
  phoneNumber: true,
  birthDate: true,
  password: true,
})

export type UserCreate = z.infer<typeof userCreateSchema>
