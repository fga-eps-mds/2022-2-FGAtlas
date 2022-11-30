import { connect } from "http2";
import prisma from "../prismaClient";
import places from "./utils";

const generateSubject: any = async (codigoNome: String[]) => {
  const subjects = Array.from(codigoNome).map((el) => ({
    codeId: el.split("-")[0].trim(),
    name: el.split("-")[1].trim(),
  }));
  await prisma.subject.createMany({ data: subjects });
};

const generateBuildings = async () => {
  const arrays = places.buildings.map((build) => ({
    name: build,
    latitude: 0,
    longitude: 0,
  }));
  await prisma.building.createMany({ data: arrays });
};

const generateRooms = async () => {
  const array = [];
  for (let i = 0; i < places.places.length; i += 1) {
    const room = {
      identification: places.places[i],
      level: places.levels[i],
      latitude: 0,
      longitude: 0,
      buildingName: places.pareamentoBuilding[i],
    };
    array.push(room);
  }
  await prisma.room.createMany({ data: array });
};

const generateClass = async (
  codigoNome: String[],
  matrizRef: String[],
  nome: String[],
  local: String[],
  turma: String[],
  horario: String[]
) => {
  const newCodigonome = codigoNome.map((codigo) => codigo.split(" ")[0].trim());
  const teacher = nome.map((prof) => prof.split("(")[0].trim());

  const room = [];
  for (let i = 0; i < local.length; i += 1) {
    const roomS = [];
    for (let j = 0; j < places.places.length; j += 1) {
      if (local[i].includes(places.places[j])) {
        roomS.push(places.places[j]);
      }
    }

    if (roomS.length === 2 && roomS[1] === "LAB NEI 2") {
      roomS.shift();
    }
    room.push(roomS);
  }

  let contador = 0;
  const matrizNum = [];
  for (let h = 0; h < matrizRef.length; h += 1) {
    if (matrizRef[h] === "agrupador") {
      matrizNum.push(contador);
      contador = 0;
    }
    if (matrizRef[h] === "linhaPar" || matrizRef[h] === "linhaImpar") {
      contador += 1;
    }
  }
  matrizNum.shift();

  const tudo = [];
  let helper = 0;
  for (let h = 0; h < turma.length; h += 1) {
    const retorno = {
      idClass: parseInt(turma[h] as string, 10),
      timeAndDay: horario[h] as string,
      teacher: teacher[h],
      // room: room[h],
      subjectCodeId: newCodigonome[helper],
    };

    matrizNum[helper] -= 1;
    if (matrizNum[helper] === 0) {
      helper += 1;
    }

    tudo.push(retorno);
  }

  await prisma.class.createMany({ data: tudo });
  // await prisma.class.create({data:{room:{connect:room[h]}},)
};

export default { generateSubject, generateClass, generateBuildings, generateRooms };
