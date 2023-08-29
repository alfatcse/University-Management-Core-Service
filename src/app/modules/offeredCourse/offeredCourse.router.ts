import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseController } from './offeredCourse.controller';
import { OfferedCourseValidation } from './offeredCourse.validation';
const router = express.Router();
router.get('/', OfferedCourseController.getAllFromDB);
router.get('/:id', OfferedCourseController.getByIdFromDB);
router.post(
  '/',
  validateRequest(OfferedCourseValidation.create),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseController.insertIntoDB
);
router.delete('/:id', OfferedCourseController.deleteByIdFromDB);
export const offeredCourseRoutes = router;
