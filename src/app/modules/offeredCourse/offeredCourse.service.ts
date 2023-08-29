import { OfferedCourse } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { asyForEach } from '../../../shared/utils';
import { ICreateOfferedCourse } from './offeredCourse.interface';
const insertIntoDB = async (
  data: ICreateOfferedCourse
): Promise<OfferedCourse[]> => {
  const { academicDepartmentId, semesterRegistrationId, courseIds } = data;
  const result: OfferedCourse[] = [];
  await asyForEach(courseIds, async (courseId: string) => {
    const alreadyExist = await prisma.offeredCourse.findFirst({
      where: {
        academicDepartmentId,
        courseId,
        semesterRegistrationId,
      },
    });
    if (!alreadyExist) {
      const insertOfferedCourse = await prisma.offeredCourse.create({
        data: { academicDepartmentId, semesterRegistrationId, courseId },
        include: {
          academicDepartment: true,
          semesterRegistration: true,
          course: true,
        },
      });
      result.push(insertOfferedCourse);
    }
  });
  return result;
};
const getAllFromDB = async (
  options: IPaginationOptions
): Promise<IGenericResponse<OfferedCourse[] | null>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const result = await prisma.offeredCourse.findMany({
    include: {
      course: true,
      academicDepartment: true,
      semesterRegistration: true,
      OfferedCourseSections: true,
    },
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.offeredCourse.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};
const getByIdFromDB = async (id: string): Promise<OfferedCourse | null> => {
  const result = await prisma.offeredCourse.findUnique({
    where: { id },
  });
  return result;
};
export const offeredCourseService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
};
