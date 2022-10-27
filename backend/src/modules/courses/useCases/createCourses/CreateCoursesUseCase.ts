import { prisma } from "../../../../database/prismaClient";

interface ICreateCourses {
  name: string;
  teacher: string;
  categoryId: string;
  description: string;
  image: string
}
export class CreateCoursesUseCase {
  async execute({name,categoryId, description, image, teacher }: ICreateCourses) {
    if (!name || !categoryId || !description || !image || !teacher) {
      throw new Error("Preencha todos os campos.");
    }

    const category = await prisma.category.findUnique({
      where:{
        id: categoryId
      }
    })

    if(!category){
      throw new Error("Categoria não encontrada.");
    }

    const course = await prisma.courses.create({
      data: {
        name,
        category_id: categoryId,
        teacher,
        description,
        image
      }
    })

    return course
  }
}
