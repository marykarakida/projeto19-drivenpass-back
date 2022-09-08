/*
  Warnings:

  - You are about to drop the `Cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Credentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "cardTypes" AS ENUM ('credit', 'debit', 'both');

-- DropForeignKey
ALTER TABLE "Cards" DROP CONSTRAINT "Cards_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Credentials" DROP CONSTRAINT "Credentials_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_ownerId_fkey";

-- DropTable
DROP TABLE "Cards";

-- DropTable
DROP TABLE "Credentials";

-- DropTable
DROP TABLE "Notes";

-- DropTable
DROP TABLE "Users";

-- DropEnum
DROP TYPE "CardType";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credentials" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "cardHolderName" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "securityCode" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL,
    "type" "cardTypes" NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_ownerId_title_key" ON "credentials"("ownerId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "notes_ownerId_title_key" ON "notes"("ownerId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "cards_ownerId_title_key" ON "cards"("ownerId", "title");

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
