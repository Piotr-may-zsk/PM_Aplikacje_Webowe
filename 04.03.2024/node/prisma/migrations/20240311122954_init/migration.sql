/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `AccountData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `AccountData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `accountdata` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `event` MODIFY `name` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `AccountData_userId_key` ON `AccountData`(`userId`);

-- AddForeignKey
ALTER TABLE `AccountData` ADD CONSTRAINT `AccountData_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
