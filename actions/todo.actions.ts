"use server";
import { ITodo } from "@/interfaces";
import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodoListAction = async (userId: string | null) => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc"
    },
    where: {
      userId: userId as string
    }
  });
};
export const createTodoAction = async (data: TodoFormValues, userId: string | null) => {
  await prisma.todo.create({
    data: { ...data, userId: userId as string }
  });
  revalidatePath("/")
};
export const updateTodoAction = async ({ id, title, completed, body }: ITodo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      body, title, completed
    }
  })
  revalidatePath("/")
};
export const deleteTodoListAction = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id
    }
  })
  revalidatePath("/")
};
