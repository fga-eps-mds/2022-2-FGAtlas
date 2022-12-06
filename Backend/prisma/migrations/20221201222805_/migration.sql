-- CreateTable
CREATE TABLE "Building" (
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Room" (
    "identification" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "buildingName" TEXT,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("identification")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "idClass" INTEGER NOT NULL,
    "timeAndDay" TEXT NOT NULL,
    "teacher" TEXT NOT NULL,
    "subjectCodeId" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "codeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("codeId")
);

-- CreateTable
CREATE TABLE "_ClassToRoom" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToRoom_AB_unique" ON "_ClassToRoom"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToRoom_B_index" ON "_ClassToRoom"("B");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_buildingName_fkey" FOREIGN KEY ("buildingName") REFERENCES "Building"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_subjectCodeId_fkey" FOREIGN KEY ("subjectCodeId") REFERENCES "Subject"("codeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToRoom" ADD CONSTRAINT "_ClassToRoom_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToRoom" ADD CONSTRAINT "_ClassToRoom_B_fkey" FOREIGN KEY ("B") REFERENCES "Room"("identification") ON DELETE CASCADE ON UPDATE CASCADE;
