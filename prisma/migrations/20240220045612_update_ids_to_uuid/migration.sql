/*
  Warnings:

  - The primary key for the `Announcement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Troop` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `father_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `troopId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_troopId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_troopId_fkey";

-- AlterTable
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "troopId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Announcement_id_seq";

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "troopId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Event_id_seq";

-- AlterTable
ALTER TABLE "Troop" DROP CONSTRAINT "Troop_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Troop_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Troop_id_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "father_id" TEXT NOT NULL,
ADD COLUMN     "troopId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_troopId_fkey" FOREIGN KEY ("troopId") REFERENCES "Troop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_troopId_fkey" FOREIGN KEY ("troopId") REFERENCES "Troop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_troopId_fkey" FOREIGN KEY ("troopId") REFERENCES "Troop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_father_id_fkey" FOREIGN KEY ("father_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
