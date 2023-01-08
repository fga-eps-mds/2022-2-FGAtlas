import utils from "../../src/scripts/utils";

describe("Integrity of arrays", () => {
  it("Should return a number greater than zero", () => {
    expect(utils.buildings.length).toBeGreaterThan(0);
    expect(utils.latBuildings.length).toBeGreaterThan(0);
    expect(utils.latRooms.length).toBeGreaterThan(0);
    expect(utils.levels.length).toBeGreaterThan(0);
    expect(utils.logRooms.length).toBeGreaterThan(0);
    expect(utils.longBuildings.length).toBeGreaterThan(0);
    expect(utils.pareamentoBuilding.length).toBeGreaterThan(0);
    expect(utils.places.length).toBeGreaterThan(0);
  });
});

describe("Array pairing", () => {
  // rooms
  it("Should return the magic number in all ocurrencies for rooms", () => {
    const magicNumber: number = utils.places.length;
    expect(utils.levels.length).toBe(magicNumber);
    expect(utils.latRooms.length).toBe(magicNumber);
    expect(utils.logRooms.length).toBe(magicNumber);
    expect(utils.pareamentoBuilding.length).toBe(magicNumber);
  });
  // building
  it("Should return the magic number in all ocurrencies for building", () => {
    const magicNumber: number = utils.buildings.length;
    expect(utils.latBuildings.length).toBe(magicNumber);
    expect(utils.longBuildings.length).toBe(magicNumber);
  });
});
