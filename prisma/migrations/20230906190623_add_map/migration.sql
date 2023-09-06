/*
  Warnings:

  - You are about to drop the `Speciality` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Speciality";

-- CreateTable
CREATE TABLE "specialities" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "name" VARCHAR(200) NOT NULL,

    CONSTRAINT "specialities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specialities_name_key" ON "specialities"("name");
