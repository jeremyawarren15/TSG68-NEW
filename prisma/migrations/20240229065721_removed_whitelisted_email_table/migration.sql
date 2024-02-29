/*
  Warnings:

  - You are about to drop the `WhitelistedEmail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WhitelistedEmail" DROP CONSTRAINT "WhitelistedEmail_troopId_fkey";

-- DropTable
DROP TABLE "WhitelistedEmail";
