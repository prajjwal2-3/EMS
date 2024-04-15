/*
  Warnings:

  - You are about to drop the column `private` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "private",
ADD COLUMN     "privacy" BOOLEAN;
