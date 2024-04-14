-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "private" BOOLEAN NOT NULL,
    "visibilty" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "organizer" TEXT NOT NULL,
    "price" TEXT,
    "photoUrl" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
