import { Request, Response } from "express";
import {CreateUserUseCase} from './CreateUserUseCase'

export class CreateUserController{
  async handle(request: Request, response: Response){
    const{name, password, email} = request.body; 

    const createUser = new CreateUserUseCase();
    const result = await createUser.execute({
      name,
      password,
      email
    })
    return response.json(result);
  }
}