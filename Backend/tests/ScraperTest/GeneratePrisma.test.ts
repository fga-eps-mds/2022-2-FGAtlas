import generatePrisma from "../scripts/generatePrisma";

let createMany = jest.fn();

jest.mock("@prisma/client", () => ({
  PrismaService: {
      subject: {
          createMany: jest.fn(() => { })
      }
  },
}));

describe("#generateSubject", () => {
    const logSpy = jest.spyOn(console,"log");
    const data = ["FGA0138 - MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE", "FGA0206 - ENGENHARIA DE PRODUTO DE SOFTWARE"];
    
    it("Should generate the correct subject", async () => {
      await generatePrisma.generateSubject(data);
      expect(logSpy).toHaveBeenCalledWith("Subjects Geradas");
    });
  });