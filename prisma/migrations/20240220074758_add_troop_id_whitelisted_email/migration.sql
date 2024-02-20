/*
  Warnings:

  - Added the required column `troopId` to the `WhitelistedEmail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WhitelistedEmail" ADD COLUMN     "troopId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "WhitelistedEmail" ADD CONSTRAINT "WhitelistedEmail_troopId_fkey" FOREIGN KEY ("troopId") REFERENCES "Troop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
