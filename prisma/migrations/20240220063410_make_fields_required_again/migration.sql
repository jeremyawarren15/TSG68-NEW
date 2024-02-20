/*
  Warnings:

  - Made the column `father_id` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `troopId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_father_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_troopId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "father_id" SET NOT NULL,
ALTER COLUMN "troopId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_troopId_fkey" FOREIGN KEY ("troopId") REFERENCES "Troop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_father_id_fkey" FOREIGN KEY ("father_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
