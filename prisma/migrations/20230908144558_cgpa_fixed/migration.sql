/*
  Warnings:

  - You are about to drop the column `cpga` on the `student_academic_infos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_academic_infos" DROP COLUMN "cpga",
ADD COLUMN     "cgpa" DOUBLE PRECISION DEFAULT 0;
