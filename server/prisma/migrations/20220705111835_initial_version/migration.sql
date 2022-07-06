-- CreateEnum
CREATE TYPE "EnumRuleStatus" AS ENUM ('Option1');

-- AlterTable
ALTER TABLE "Rule" ADD COLUMN     "status" "EnumRuleStatus";

-- CreateTable
CREATE TABLE "Task" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "title" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
