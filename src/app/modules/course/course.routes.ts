import express from 'express';
import { CourseController } from './course.controller';
const router = express.Router();

router.post('/', CourseController.insertIntoDb);
export const CourseRoute = router;