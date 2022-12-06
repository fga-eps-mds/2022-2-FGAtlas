const parseDay = async (days: string[]) => {
  const day = [];

  for (let k = 0; k < days.length; k += 1) {
    const dayP = [];
    for (let l = 0; l < days[k].length; l += 1) {
      const diasString = days[k][l][0].split("");
      const diasInt = diasString.map((dias) => parseInt(dias, 10));
      dayP.push(diasInt);
    }
    day.push(dayP);
  }
  return day;
};
const parseHour = async (hours: string[]) => {
  const hour = [];

  for (let k = 0; k < hours.length; k += 1) {
    const hourP = [];
    for (let l = 0; l < hours[k].length; l += 1) {
      // horario
      const horariosString = hours[k][l][2].split("");
      const horariosInt = horariosString.map((horarioV) => parseInt(horarioV, 10));
      let horarios = [];
      if (hours[k][l][1] === "M") {
        horarios = horariosInt.map((numero) => numero + 7);
      } else if (hours[k][l][1] === "T") {
        horarios = horariosInt.map((numero) => numero + 12);
      } else {
        horarios = horariosInt.map((numero) => numero + 17);
      }
      hourP.push(horarios);
    }
    hour.push(hourP);
  }
  return hour;
};

export default { parseDay, parseHour };
