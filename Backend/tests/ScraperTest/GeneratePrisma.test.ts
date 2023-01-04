import prismaClient from "../../src/prismaClient";

describe("Integrity of arrays", () => {
    it("Should return a number greater than zero", async () => {
      const buildingList =  await prismaClient.building.findMany();
      const roomList = await prismaClient.room.findMany();
      const classList = await prismaClient.class.findMany();
      const subjectList = await prismaClient.subject.findMany();

      expect(buildingList.length).toBeGreaterThan(0);
      expect(roomList.length).toBeGreaterThan(0);
      expect(classList.length).toBeGreaterThan(0);-
      expect(subjectList.length).toBeGreaterThan(0);
    });
  });