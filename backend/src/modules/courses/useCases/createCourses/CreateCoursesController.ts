import { Request, Response } from "express";
import { CreateCoursesUseCase } from "./CreateCoursesUseCase";

export class CreateCoursesController {
  async handle(request: Request, response: Response) {
    const { name, description, image, teacher, category } = request.body;

    const createCoursesUseCase = new CreateCoursesUseCase();
    const result = await createCoursesUseCase.execute({
      name,
      category,
      description,
      image,
      teacher,
    });
    return response.json(result);
  }
}
