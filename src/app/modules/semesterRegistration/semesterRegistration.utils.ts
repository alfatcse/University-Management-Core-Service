const getAvailableCourses = (
  offeredCourses: any,
  studentCompletedCourses: any,
  studentCurrentSemesterTakenCourses: any
) => {
  const completedCoursesId = studentCompletedCourses.map(
    (course: any) => course.id
  );
  console.log('com', completedCoursesId);
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
        console.log(preRequisitesIds);
        return preRequisitesIds.every((id: string) =>
          completedCoursesId.includes(id)
        );
      }
    })
    .map((course: any) => {
      const isAlreadyTakenCourse = studentCurrentSemesterTakenCourses.find(
        (c: any) => c.offeredCourseId === course.id
      );
      if (isAlreadyTakenCourse) {
        course.offeredCourseSections.map((section: any) => {
          if (section.id === isAlreadyTakenCourse.offeredCourseSectionId) {
            section.isTaken = true;
          } else {
            section.isTaken = false;
          }
        });
        return {
          ...course,
          isTaken: true,
        };
      } else {
        course.offeredCourseSections.map((section: any) => {
          section.isTaken = false;
        });
        return {
          ...course,
          isTaken: false,
        };
      }
    });
  console.log('av', availableCoursesList);
  return availableCoursesList;
};
export const semesterRegistrationUtils = {
  getAvailableCourses,
};
