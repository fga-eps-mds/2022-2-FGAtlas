import scrap from "../../src/scripts/scrapping";
import prisma from "../../src/prismaClient";

describe("Scrap behaviors", () => {
  it("should return the database seeded", async () => {
    await prisma.building.deleteMany();
    await prisma.class.deleteMany();
    await prisma.room.deleteMany();
    await prisma.subject.deleteMany();

    await prisma.$executeRaw`TRUNCATE TABLE "Class" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Room" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Subject" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Building" RESTART IDENTITY CASCADE`;

    await scrap();

    expect(await prisma.building.count()).toBeGreaterThan(0);
    expect(await prisma.class.count()).toBeGreaterThan(0);
    expect(await prisma.room.count()).toBeGreaterThan(0);
    expect(await prisma.subject.count()).toBeGreaterThan(0);
  });
});
