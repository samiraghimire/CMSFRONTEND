/*
  Warnings:

  - A unique constraint covering the columns `[licenseNumber]` on the table `doctors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `doctors_licenseNumber_key` ON `doctors`(`licenseNumber`);
