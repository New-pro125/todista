import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  /** Generate Fake data for Todo model */
  await prisma.todo.createMany({
    data: Array.from({ length: 50 }, () => ({
      title: faker.lorem.word(),
      body: faker.lorem.paragraph(),
    })),
  });
};
main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
