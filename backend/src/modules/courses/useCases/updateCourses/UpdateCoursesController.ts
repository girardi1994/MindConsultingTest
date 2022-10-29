import { Request, Response } from "express";
import { UpdateCoursesUseCase } from "./UpdateCoursesUseCase";

export class UpdateCoursesController {
  async handle(request: Request, response: Response) {
    const { name, category, description, image, teacher, id, active } =
      request.body;

    const updateCoursesUseCase = new UpdateCoursesUseCase();
    const result = await updateCoursesUseCase.execute({
      name,
      description,
      image,
      teacher,
      id,
      active,
      category,
    });
    return response.json(result);
  }
}
