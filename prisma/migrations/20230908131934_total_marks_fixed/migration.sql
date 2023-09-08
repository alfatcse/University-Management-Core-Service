/*
  Warnings:

  - You are about to drop the column `totlaMarks` on the `student_enrolled_courses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_enrolled_courses" DROP COLUMN "totlaMarks",
ADD COLUMN     "totalMarks" INTEGER DEFAULT 0;
