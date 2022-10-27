import { Router } from "express";
//USER
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";
import { LoginUserController } from "./modules/user/useCases/loginUser/LoginUserController";

//CATEGORY
import { CreateCategoryController } from "./modules/category/useCase/createCategory/CreateCategoryController";
import { ListCategoryController } from "./modules/category/useCase/listCategory/ListCategoryController";

//COURSES
import { CreateCoursesController } from "./modules/courses/useCases/createCourses/CreateCoursesController";
import { ListCoursesController } from "./modules/courses/useCases/listCourses/ListCoursesController";
import { DeleteCoursesController } from "./modules/courses/useCases/deleteCourses/DeleteCoursesController";

const routes = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const createCoursesController = new CreateCoursesController();
const listCoursesController = new ListCoursesController();
const deleteCoursesController = new DeleteCoursesController()

//USER
routes.post("/createUser/", createUserController.handle);
routes.post("/loginUser/", loginUserController.handle);

//CATEGORY
routes.post("/category/", createCategoryController.handle);
routes.get("/category/", listCategoryController.handle);

//COURSES
routes.post("/courses/", createCoursesController.handle);
routes.get("/courses/", listCoursesController.handle);
routes.delete("/courses/:id", deleteCoursesController.handle);

export { routes };
