-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('CAPTAIN', 'FIRST_LIEUTENANT', 'SECOND_LIEUTENANT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isBoardMember" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "rank" "Rank";
