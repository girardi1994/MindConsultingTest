import { Router } from "express";
//USER
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";
import { LoginUserController } from "./modules/user/useCases/loginUser/LoginUserController";

//CATEGORY
import { CreateCategoryController } from "./modules/category/useCase/createCategory/CreateCategoryController";
import { ListCategoryController } from "./modules/category/useCase/listCategory/ListCategoryController";

const routes = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();

//USER
routes.post("/createUser/", createUserController.handle);
routes.post("/loginUser/", loginUserController.handle);

//CATEGORY
routes.post("/category/", createCategoryController.handle);
routes.get("/category/", listCategoryController.handle);

export { routes };
