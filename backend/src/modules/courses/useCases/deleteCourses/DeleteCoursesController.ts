import { Request, Response } from "express";
import { DeleteCoursesUseCase } from "./DeleteCoursesUseCase";

export class DeleteCoursesController {
  async handle(request: Request, response: Response) {
    const {id} = request.params
    const deleteCoursesUseCase = new DeleteCoursesUseCase();
    const result = await deleteCoursesUseCase.execute({id});
    return response.json(result);
  }
}
