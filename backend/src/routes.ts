import multer from 'multer'
import uploadConfig from './services/upload'
import { request, Router } from "express";
//USER
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";
import { LoginUserController } from "./modules/user/useCases/loginUser/LoginUserController";

//COURSES
import { CreateCoursesController } from "./modules/courses/useCases/createCourses/CreateCoursesController";
import { ListCoursesController } from "./modules/courses/useCases/listCourses/ListCoursesController";
import { DeleteCoursesController } from "./modules/courses/useCases/deleteCourses/DeleteCoursesController";
import { UpdateCoursesController } from "./modules/courses/useCases/updateCourses/UpdateCoursesController";

const routes = Router();
const upload = multer(uploadConfig)

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const createCoursesController = new CreateCoursesController();
const listCoursesController = new ListCoursesController();
const deleteCoursesController = new DeleteCoursesController()
const updateCoursesController = new UpdateCoursesController()

//USER
routes.post("/createUser/", createUserController.handle);
routes.post("/loginUser/", loginUserController.handle);

//COURSES
routes.post("/courses/", createCoursesController.handle);
routes.get("/courses/", listCoursesController.handle);
routes.delete("/courses/:id", deleteCoursesController.handle);
routes.put("/courses/", updateCoursesController.handle);

routes.post("/avatar/", upload.single('avatar'), (request, response)=> {
  return response.json({url: request.file?.filename})
})

export { routes };
