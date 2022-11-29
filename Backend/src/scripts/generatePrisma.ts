import prisma from "../prismaClient";
import places from "./utils";

const generateSubject: any = async (codigoNome: String[]) => {
  const subjects = Array.from(codigoNome).map((el) => ({
    codeId: el.split("-")[0].trim(),
    name: el.split("-")[1].trim(),
  }));
  await prisma.subject.createMany({ data: subjects });
};

const generateClass = async (
  codigoNome: String[],
  matrizRef: String[],
  nome: String[],
  local: String[],
  turma: String[],
  horario: String[]
) => {
  const matrizMaterias = codigoNome.map((materia) => materia.split("-")[0].trim());
  const teacher = nome.map((prof) => prof.split("(")[0].trim());

  const room = [];
  for (let i = 0; i < local.length; i += 1) {
    const roomS = [];
    for (let j = 0; j < places.length; j += 1) {
      if (local[i].includes(places[j])) {
        roomS.push(places[j]);
      }
    }

    if (roomS.length === 2 && roomS[1] === "LAB NEI 2") {
      roomS.shift();
    }
    room.push(roomS);
  }

  const newHorario = horario.map((horarioV: String) => horarioV.split(" "));
  const cut = newHorario.map((sigla) => {
    const aux = [];
    for (let i = 0; i < sigla.length; i += 1) {
      let index = sigla[i].indexOf("M");

      if (index === -1) {
        index = sigla[i].indexOf("T");
      }
      if (index === -1) {
        index = sigla[i].indexOf("N");
      }
      if (index !== -1) {
        const little = [];
        const days = sigla[i].slice(0, index);
        const period = sigla[i][index];
        const hour = sigla[i].slice(index + 1);
        little.push(days, period, hour); // dia padrao
        aux.push(little);
      }
    }

    return aux; // total
  });

  const hour: number[][][] = [];
  const day: number[][][] = [];
  for (let k = 0; k < cut.length; k += 1) {
    const hourP = [];
    const dayP = [];
    for (let l = 0; l < cut[k].length; l += 1) {
      const diasString = cut[k][l][0].split("");
      const diasInt = diasString.map((dias) => parseInt(dias, 10));
      dayP.push(diasInt);

      // horario
      const horariosString = cut[k][l][2].split("");
      const horariosInt = horariosString.map((horarioV) => parseInt(horarioV, 10));
      let horarios = [];
      if (cut[k][l][1] === "M") {
        horarios = horariosInt.map((numero) => numero + 7);
      } else if (cut[k][l][1] === "T") {
        horarios = horariosInt.map((numero) => numero + 12);
      } else {
        horarios = horariosInt.map((numero) => numero + 17);
      }
      hourP.push(horarios);
    }
    hour.push(hourP);
    day.push(dayP);
  }
};

export default { generateSubject, generateClass };
