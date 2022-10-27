import { prisma } from "../../../../database/prismaClient";

interface ICreateCategory {
  name: string;
}
export class CreateCategoryUseCase {
  async execute({ name }: ICreateCategory) {
    if (!name) {
      throw new Error("Preencha todos os campos.");
    }

    const categoryExist = await prisma.category.findFirst({
      where: {
        name,
      },
    });


    if (categoryExist) {
      throw new Error("Categoria já cadastrado.");
    }

    const category = await prisma.category.create({
      data: {
        name,
      },
    });
    return category;
  }
}
