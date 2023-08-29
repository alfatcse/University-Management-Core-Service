import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { offeredCourseSectionService } from './offeredCourseSection.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await offeredCourseSectionService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Course Section Created',
    data: result,
  });
});
const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await offeredCourseSectionService.getByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Course Section Created',
    data: result,
  });
});
export const OfferedCourseSectionController = {
  insertIntoDB,
  getByIdFromDB,
};
