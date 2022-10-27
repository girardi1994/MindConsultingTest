import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
  async handle(request: Request, response: Response) {
    const listCategoryUseCase = new ListCategoryUseCase();
    const result = await listCategoryUseCase.execute();
    return response.json(result);
  }
}
