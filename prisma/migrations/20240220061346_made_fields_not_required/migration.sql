-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_father_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_troopId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "father_id" DROP NOT NULL,
ALTER COLUMN "troopId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_troopId_fkey" FOREIGN KEY ("troopId") REFERENCES "Troop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_father_id_fkey" FOREIGN KEY ("father_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
