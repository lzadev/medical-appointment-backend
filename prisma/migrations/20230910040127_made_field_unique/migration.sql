/*
  Warnings:

  - You are about to alter the column `code` on the `specialities` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - A unique constraint covering the columns `[code]` on the table `specialities` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "specialities" ALTER COLUMN "code" SET DATA TYPE VARCHAR(20);

-- CreateIndex
CREATE UNIQUE INDEX "specialities_code_key" ON "specialities"("code");
