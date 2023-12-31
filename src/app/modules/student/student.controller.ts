import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { studentFilterableFields } from './student.constants';
import { StudentService } from './student.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await StudentService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await StudentService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await StudentService.updateIntoDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Updated successfully',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await StudentService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Deleted successfully',
    data: result,
  });
});
const myCourses = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const filter = pick(req.query, ['academicSemesterId', 'courseId']);
  const result = await StudentService.myCourses(user.userId, filter);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Courses fetched Successfully',
    data: result,
  });
});
const getMyCourseSchedule = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const filter = pick(req.query, ['academicSemesterId', 'courseId']);
  const result = await StudentService.getMyCourseSchedule(user.userId, filter);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Courses Schedule data fetched Successfully',
    data: result,
  });
});
const myAcademicInfo = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const result = await StudentService.getMyAcademicInfo(user.userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Academic Info data fetched Successfully',
    data: result,
  });
});
const getStudentMarks = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const academicSemesterId: string = req?.query?.academicSemesterId as string;
  const courseId: string = req?.query?.courseId as string;
  const result = await StudentService.getStudentMarks(
    user.userId,
    academicSemesterId,
    courseId
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Marks Info data fetched Successfully',
    data: result,
  });
});
export const StudentController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  myCourses,
  getMyCourseSchedule,
  myAcademicInfo,
  getStudentMarks,
};
