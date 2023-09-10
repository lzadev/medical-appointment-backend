-- CreateTable
CREATE TABLE "SystemParameters" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "prefix" VARCHAR(20) NOT NULL,
    "secuence" TEXT NOT NULL DEFAULT '000000',
    "description" VARCHAR(200) NOT NULL,

    CONSTRAINT "SystemParameters_pkey" PRIMARY KEY ("id")
);
