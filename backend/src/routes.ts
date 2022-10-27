import { Router } from "express";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";
import { LoginUserController } from "./modules/user/useCases/loginUser/LoginUserController";

const routes = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

routes.post("/createUser/", createUserController.handle);
routes.post("/loginUser/", loginUserController.handle);

export { routes };
