import prisma from '../../../shared/prisma';
const insertIntoDb = async (data: any): Promise<any> => {
  const { preRequisiteCourses, ...courseData } = data;
  const result = await prisma.course.create({
    data: courseData,
  });

  if (preRequisiteCourses && preRequisiteCourses.length > 0) {
    for (let index = 0; index < preRequisiteCourses.length; index++) {
      const createPrerequisite = await prisma.courseToPrerequisite.create({
        data: {
          courseId: result.id,
          preRequisiteId: preRequisiteCourses[index].courseId,
        },
      });
      console.log(preRequisiteCourses[index].courseId, createPrerequisite);
    }
  }
  return result;
};

export const CourseService = { insertIntoDb };
