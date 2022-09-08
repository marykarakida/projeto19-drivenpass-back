-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('credit', 'debit', 'both');

-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "cardHolderName" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "securityCode" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL,
    "type" "CardType" NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cards_ownerId_title_key" ON "Cards"("ownerId", "title");

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
