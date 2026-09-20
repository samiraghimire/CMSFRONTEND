/*
  Warnings:

  - The values [CREDIT_CARD,DEBIT_CARD,BANK_TRANSFER,INSURANCE,ONLINE,OTHER] on the enum `payments_method` will be removed. If these variants are still used in the database, this will fail.
  - The values [CREDIT_CARD,DEBIT_CARD,BANK_TRANSFER,INSURANCE,ONLINE,OTHER] on the enum `payments_method` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `bills` MODIFY `paymentMethod` ENUM('ESEWA', 'KHALTI', 'CASH') NULL;

-- AlterTable
ALTER TABLE `payments` MODIFY `method` ENUM('ESEWA', 'KHALTI', 'CASH') NOT NULL;
