import { AppDataSource } from "../../data-source";
import { Teacher } from "../../entities/Teacher";
import { TeacherCreation } from "../../interfaces/Teacher/teacher.interface";

export const createTeacherService = async ({
  name,
  email,
}: TeacherCreation) => {
  const teacherRepository = AppDataSource.getRepository(Teacher);

  const findTeacher = await teacherRepository.findOneBy({
    email: email,
  });

  if (findTeacher) {
    throw new Error("This teacher already exists in our database");
  }

  const teacher = new Teacher(name, email);

  await teacherRepository.save(teacher);

  return teacher;
};
