import { SemesterRegistrationStatus } from '@prisma/client';
import { z } from 'zod';
const create = z.object({
  body: z.object({
    startDate: z.string({
      required_error: 'Start Date is required',
    }),
    endDate: z.string({
      required_error: 'End Date is required',
    }),
    // status: z.string({
    //   required_error: 'Status is Required',
    // }),
    minCredit: z.number({
      required_error: 'Minimum Credit is Required',
    }),
    maxCredit: z.number({
      required_error: 'Maximum Credit is Required',
    }),
    academicSemesterId: z.string({
      required_error: 'Academic Semester Id is Required',
    }),
  }),
});

const update = z.object({
  body: z.object({
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    status: z
      .enum([...Object.values(SemesterRegistrationStatus)] as [
        string,
        ...string[]
      ])
      .optional(),
    minCredit: z.number().optional(),
    maxCredit: z.number().optional(),
    academicSemesterId: z.string().optional(),
  }),
});

export const SemesterRegistrationValidation = {
  create,
  update,
};
