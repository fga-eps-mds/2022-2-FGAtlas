import  prisma from "../prismaClient";
import scrap from "../scripts/scrapping";

describe("Integrity of arrays", () => {

    it("Error if tries to add or remove itens", async () =>{
        const buildingList = await prisma.building.findMany();
        const roomList = await prisma.room.findMany();
        const classList = await prisma.class.findMany();
        const subjectList = await prisma.subject.findMany();

        expect(buildingList.length).toBeGreaterThan(0);
        expect(roomList.length).toBeGreaterThan(0);
        expect(classList.length).toBeGreaterThan(0);
        expect(subjectList.length).toBeGreaterThan(0);

        await 
        scrap.scrap();

        expect(buildingList).toBe(prisma.building);
    });
});

describe("", () =>{
    it("Should delete all itens", async () => {
        
        await prisma.class.deleteMany();
        await prisma.room.deleteMany();
        await prisma.subject.deleteMany();

        const buildingList = await prisma.building.findMany();
        const roomList = await prisma.room.findMany();
        const classList = await prisma.class.findMany();
        const subjectList = await prisma.subject.findMany();

        
        expect(buildingList.length).toBe(0);
        expect(roomList.length).toBe(0);
        expect(classList.length).toBe(0);
        expect(subjectList.length).toBe(0);
  
    });

    it("", async () =>{

        await scrap.scrap();

        const buildingList = await prisma.building.findMany();
        const roomList = await prisma.room.findMany();
        const classList = await prisma.class.findMany();
        const subjectList = await prisma.subject.findMany();

        expect(buildingList.length).toBeGreaterThan(0);
        expect(roomList.length).toBeGreaterThan(0);
        expect(classList.length).toBeGreaterThan(0);
        expect(subjectList.length).toBeGreaterThan(0);
    });
    
});