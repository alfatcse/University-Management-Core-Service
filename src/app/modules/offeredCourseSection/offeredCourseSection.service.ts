import { OfferedCourseSection } from '@prisma/client';
import prisma from '../../../shared/prisma';
const insertIntoDB = async (
  data: OfferedCourseSection
): Promise<OfferedCourseSection> => {
  console.log('dddd', data);
  const result = await prisma.offeredCourseSection.create({ data });
  return result;
};

export const offeredCourseSectionService = {
  insertIntoDB,
};
