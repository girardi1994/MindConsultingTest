import { prisma } from "../../../../database/prismaClient";

interface ICreateCourses {
  name: string;
  teacher: string;
  description: string;
  image: string
  category: string
}
export class CreateCoursesUseCase {
  async execute({name, description, image, teacher, category }: ICreateCourses) {
    if (!name  || !description || !image || !teacher || !category) {
      throw new Error("Preencha todos os campos.");
    }

    const course = await prisma.courses.create({
      data: {
        name,
        teacher,
        description,
        image,
        category
      }
    })

    return course
  }
}
