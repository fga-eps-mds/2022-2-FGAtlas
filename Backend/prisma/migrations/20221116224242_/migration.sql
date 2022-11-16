-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "matricula" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Student" (
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "userMatricula" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("userMatricula")
);

-- CreateTable
CREATE TABLE "Coordination" (
    "userMatricula" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Coordination_pkey" PRIMARY KEY ("userMatricula")
);

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
    "buildingname" TEXT,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("identification")
);

-- CreateTable
CREATE TABLE "Subject" (
    "codeId" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "teacher" TEXT NOT NULL,
    "class" INTEGER NOT NULL,
    "roomID" TEXT,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("codeId")
);

-- CreateTable
CREATE TABLE "Post" (
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coordinationUserMatricula" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("title")
);

-- CreateTable
CREATE TABLE "_StudentToSubject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "User_matricula_key" ON "User"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_time_teacher_key" ON "Subject"("time", "teacher");

-- CreateIndex
CREATE UNIQUE INDEX "_StudentToSubject_AB_unique" ON "_StudentToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_StudentToSubject_B_index" ON "_StudentToSubject"("B");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userMatricula_fkey" FOREIGN KEY ("userMatricula") REFERENCES "User"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coordination" ADD CONSTRAINT "Coordination_userMatricula_fkey" FOREIGN KEY ("userMatricula") REFERENCES "User"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_buildingname_fkey" FOREIGN KEY ("buildingname") REFERENCES "Building"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_roomID_fkey" FOREIGN KEY ("roomID") REFERENCES "Room"("identification") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_coordinationUserMatricula_fkey" FOREIGN KEY ("coordinationUserMatricula") REFERENCES "Coordination"("userMatricula") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentToSubject" ADD CONSTRAINT "_StudentToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "Student"("userMatricula") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentToSubject" ADD CONSTRAINT "_StudentToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("codeId") ON DELETE CASCADE ON UPDATE CASCADE;
