import { Request, Response } from "express";
import { UpdateCoursesUseCase } from "./UpdateCoursesUseCase";

export class UpdateCoursesController {
  async handle(request: Request, response: Response) {
    const { name, categoryId, description, image, teacher, id, active } = request.body;

    const updateCoursesUseCase = new UpdateCoursesUseCase();
    const result = await updateCoursesUseCase.execute({
      name,
      categoryId,
      description,
      image,
      teacher,
      id,
      active
    });
    return response.json(result);
  }
}
