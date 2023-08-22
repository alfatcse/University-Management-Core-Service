import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CourseService } from './course.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.insertIntoDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created Successfully',
    data: result,
  });
});
export const CourseController = {
  insertIntoDb,
};
