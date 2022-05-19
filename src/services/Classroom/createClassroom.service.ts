import { AppDataSource } from "../../data-source";
import { Classroom } from "../../entities";
import { AppError } from "../../errors";
import { ClassroomCreation } from "../../interfaces/Classroom/classroom.interface";

export const createClassroomService = async ({
  name,
  teacherId,
}: ClassroomCreation) => {
  const classroomRepository = AppDataSource.getRepository(Classroom);

  try {
    const findClassroom = await classroomRepository.findOneBy({ name: name });

    if (findClassroom) {
      throw new AppError(409, "This classroom already exists in our database");
    }

    const classroom = new Classroom(name, teacherId);

    await classroomRepository.save(classroom);

    return classroom;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message);
    }
    if (err instanceof Error) {
      throw new AppError(400, err.message);
    }
  }
};
