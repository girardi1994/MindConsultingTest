import { prisma } from "../../../../database/prismaClient";

export class ListCategoryUseCase {
  async execute() {
    const category = await prisma.category.findMany();

    return category;
  }
}
