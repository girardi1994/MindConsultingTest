import { Request, Response } from "express";
import {LoginUserUseCase} from './LoginUserUseCase'

export class LoginUserController{
  async handle(request: Request, response: Response){
    const{password, email} = request.body; 

    const loginUserUseCase = new LoginUserUseCase();
    const result = await loginUserUseCase.execute({
      password,
      email
    })
    return response.json(result);
  }
}