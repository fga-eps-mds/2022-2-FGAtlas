import scrap from "../../src/scripts/scrapping";
import prisma from "../../src/prismaClient";

describe("Scrap behaviors", () => {
  it("should return the database seeded", async () => {
    await prisma.building.deleteMany();
    await prisma.class.deleteMany();
    await prisma.room.deleteMany();
    await prisma.subject.deleteMany();

    await scrap();

    expect(await prisma.building.count()).toBeGreaterThan(0);
    expect(await prisma.class.count()).toBeGreaterThan(0);
    expect(await prisma.room.count()).toBeGreaterThan(0);
    expect(await prisma.subject.count()).toBeGreaterThan(0);
  });
});
