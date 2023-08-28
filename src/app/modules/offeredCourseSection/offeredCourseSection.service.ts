import { OfferedCourseSection } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
const insertIntoDB = async (
  data: OfferedCourseSection
): Promise<OfferedCourseSection> => {
  const isExistOfferedCourse = await prisma.offeredCourse.findFirst({
    where: {
      id: data.offeredCourseId,
    },
  });
  if (!isExistOfferedCourse) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Offered Course Does not exist!'
    );
  }
  const result = await prisma.offeredCourseSection.create({ data });
  return result;
};

export const offeredCourseSectionService = {
  insertIntoDB,
};
