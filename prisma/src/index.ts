import { PrismaClient } from "./src/generated/prisma"; // Make sure this import path is correct

const prisma = new PrismaClient();

async function createUser() {
  try {
    await prisma.user.create({
      data: {
        username: "test",
        password: "test",
        age: 20,
        city: "test",
        todos: {
          create: [ // Use the 'create' property for nested creation
            {
              title: "test",
              done: true,
            },
            // Add more todo objects here if needed within this array
          ],
        },
      },
    });
    console.log("User and associated todos created successfully!");
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();