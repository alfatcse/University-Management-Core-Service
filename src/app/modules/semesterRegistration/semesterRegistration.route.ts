import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import { CourseValidation } from './semesterRegistration.validation';
const router = express.Router();
router.post(
  '/',
  validateRequest(CourseValidation.create),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SemesterRegistrationController.insertIntoDB
);
router.get('/:id', SemesterRegistrationController.getByIdFromDB);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SemesterRegistrationController.removeSemesterRegistration
);
router.get('/', SemesterRegistrationController.getAllFromDB);
export const semesterRegistrationRoutes = router;
