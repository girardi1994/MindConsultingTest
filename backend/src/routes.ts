import { Router } from "express";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
routes.post("/createUser/", createUserController.handle);

export { routes };
