import { Router } from "express";
import { TeacherController } from "../../controllers";

const teacherRoutes = Router();

teacherRoutes.get("/", TeacherController.index);
teacherRoutes.post("/", TeacherController.store);
teacherRoutes.patch("/:id", TeacherController.update);
teacherRoutes.delete("/:id", TeacherController.delete);

export default teacherRoutes;
