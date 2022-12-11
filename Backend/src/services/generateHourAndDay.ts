// Funcao responsável por transformar a string em um array de dias
// ela recebe o código e devolve tal.
const parseDay = (horario: string) => {
  const newHorario = horario.split(" ");
  const cut = newHorario.map((sigla: string) => {
    const aux = [];

    let index = sigla.indexOf("M");

    if (index === -1) {
      index = sigla.indexOf("T");
    }
    if (index === -1) {
      index = sigla.indexOf("N");
    }
    if (index !== -1) {
      const little = [];
      const days = sigla.slice(0, index);
      const period = sigla[index];
      const hour = sigla.slice(index + 1);
      little.push(days, period, hour); // dia padrao
      aux.push(little);
    }

    return aux; // total
  });

  const day = [];
  for (let k = 0; k < cut.length; k += 1) {
    for (let l = 0; l < cut[k].length; l += 1) {
      const diasString = cut[k][l][0].split("");
      const diasInt = diasString.map((dias) => parseInt(dias, 10));
      day.push(diasInt);
    }
  }
  return day;
};

// Funcao responsável por transformar a string em um array de horas da matéria
// ela recebe o código e devolve tal.
const parseHour = (horario: string) => {
  const newHorario = horario.split(" ");
  const cut = newHorario.map((sigla: string) => {
    const aux = [];
    let index = sigla.indexOf("M");

    if (index === -1) {
      index = sigla.indexOf("T");
    }
    if (index === -1) {
      index = sigla.indexOf("N");
    }
    if (index !== -1) {
      const little = [];
      const days = sigla.slice(0, index);
      const period = sigla[index];
      const hour = sigla.slice(index + 1);
      little.push(days, period, hour); // dia padrao
      aux.push(little);
    }

    return aux; // total
  });

  const hour = [];
  for (let k = 0; k < cut.length; k += 1) {
    for (let l = 0; l < cut[k].length; l += 1) {
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
      hour.push(horarios);
    }
  }

  return hour;
};

export default { parseDay, parseHour };
