import { Request, Response } from "express";
import { ListCoursesUseCase } from "./ListCoursesUseCase";

export class ListCoursesController {
  async handle(request: Request, response: Response) {
    const listCoursesUseCase = new ListCoursesUseCase();
    const result = await listCoursesUseCase.execute();
    return response.json(result);
  }
}
