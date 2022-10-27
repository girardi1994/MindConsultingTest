import { prisma } from "../../../../database/prismaClient";

interface ICreateCourses {
  id: string;
}

export class DeleteCoursesUseCase {
  async execute({id}: ICreateCourses) {
    if(!id){
      throw new Error("Preencha todo os dados")
    }

    const course = await prisma.courses.findUnique({
      where:{
        id
      }
    })

    if(!course){
      throw new Error("Curso não encontrado")
    }

    await prisma.courses.delete({where: {id}})

    return []
  }
}
