import { Request, Response } from "express";
import { CreateCoursesUseCase } from "./CreateCoursesUseCase";

export class CreateCoursesController {
  async handle(request: Request, response: Response) {
    const { name, categoryId, description, image, teacher } = request.body;

    const createCoursesUseCase = new CreateCoursesUseCase();
    const result = await createCoursesUseCase.execute({
      name,
      categoryId,
      description,
      image,
      teacher,
    });
    return response.json(result);
  }
}
