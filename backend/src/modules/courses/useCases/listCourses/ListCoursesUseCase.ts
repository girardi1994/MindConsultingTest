import { prisma } from "../../../../database/prismaClient";

export class ListCoursesUseCase {
  async execute() {
    const courses = await prisma.courses.findMany();

    return courses;
  }
}
