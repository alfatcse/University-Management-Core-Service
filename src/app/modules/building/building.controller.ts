import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { BuildingFilterAbleFields } from './building.constants';
import { BuildingService } from './building.service';
const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building Created Successfully',
    data: result,
  });
});
const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.updateOneInDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building Created Successfully',
    data: result,
  });
});
const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.getByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building Fetched Successfully',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, BuildingFilterAbleFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await BuildingService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building Created Successfully',
    meta: result.meta,
    data: result.data,
  });
});
const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BuildingService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building Deleted Successfully',
    data: result,
  });
});
export const BuildingController = {
  insertIntoDB,
  getAllFromDB,
  deleteByIdFromDB,
  getByIdFromDB,
  updateOneInDB,
};
