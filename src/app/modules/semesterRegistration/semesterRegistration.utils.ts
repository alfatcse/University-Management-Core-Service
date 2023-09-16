const getAvailableCourses = (
  offeredCourses: any,
  studentCompletedCourses: any,
  studentCurrentSemesterTakenCourses: any
) => {
  const completedCoursesId = studentCompletedCourses.map(
    (course: any) => course.id
  );
  const availableCoursesList = offeredCourses
    .filter(
      (offeredCourse: any) =>
        !completedCoursesId.includes(offeredCourse.courseId)
    )
    .filter((course: any) => {
      const preRequisites = course.course.preRequisite;
      if (preRequisites.length === 0) {
        return true;
      } else {
        const preRequisitesIds = preRequisites.map(
          (preRequisite: any) => preRequisite.preRequisiteId
        );
        console.log('pre', preRequisitesIds);
      }
    });
  console.log(availableCoursesList);
  return null;
};
export const semesterRegistrationUtils = {
  getAvailableCourses,
};
