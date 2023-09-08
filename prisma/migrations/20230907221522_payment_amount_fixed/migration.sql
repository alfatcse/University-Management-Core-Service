/*
  Warnings:

  - You are about to drop the column `fullpaymentAmount` on the `student_semester_payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_semester_payment" DROP COLUMN "fullpaymentAmount",
ADD COLUMN     "fullPaymentAmount" INTEGER DEFAULT 0;
