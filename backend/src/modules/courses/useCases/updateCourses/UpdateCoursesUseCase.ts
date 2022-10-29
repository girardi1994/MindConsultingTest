import { prisma } from "../../../../database/prismaClient";

interface IUpdateCourses {
  id: string;
  name: string;
  teacher: string;
  category: string;
  description: string;
  image: string;
  active: boolean;
}

export class UpdateCoursesUseCase {
  async execute({
    name,
    category,
    description,
    image,
    teacher,
    id,
    active,
  }: IUpdateCourses) {
    if (!id || !name || !category || !description || !image || !teacher) {
      throw new Error("Preencha todos os campos.");
    }

    const courseExist = await prisma.courses.findUnique({
      where: {
        id,
      },
    });

    if (!courseExist) {
      throw new Error("Curso não encontrado.");
    }

    const course = await prisma.courses.update({
      where: {
        id,
      },
      data: {
        name,
        category,
        teacher,
        description,
        image,
        active,
      },
    });

    return course;
  }
}
