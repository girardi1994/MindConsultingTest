import { prisma } from "../../../../database/prismaClient";

interface IUpdateCourses {
  id: string
  name: string;
  teacher: string;
  categoryId: string;
  description: string;
  image: string
  active: boolean
}

export class UpdateCoursesUseCase {
  async execute({name,categoryId, description, image, teacher, id, active }: IUpdateCourses) {
    if (!id||!name || !categoryId || !description || !image || !teacher) {
      throw new Error("Preencha todos os campos.");
    }

    const courseExist = await prisma.courses.findUnique({
      where:{
        id
      }
    })

    if(!courseExist){
      throw new Error("Curso não encontrado.");
    }

    const category = await prisma.category.findUnique({
      where:{
        id: categoryId
      }
    })

    if(!category){
      throw new Error("Categoria não encontrada.");
    }

    const course = await prisma.courses.update({
      where:{
        id
      },
      data: {
        name,
        category_id: categoryId,
        teacher,
        description,
        image,
        active
      }
    })

    return course
  }
}
