const puppeteer = require("puppeteer");
const { PrismaClient } = require("@prisma/client");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://sigaa.unb.br/sigaa/public/turmas/listar.jsf");
  await page.select('select[id="formTurma:inputDepto"]', "673");
  await page.click('input[name="formTurma:j_id_jsp_1370969402_11"]');

  await page.waitForSelector("#turmasAbertas > table > tbody > tr.agrupador > td > a > span");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td.turma");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td.nome");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td:nth-child(8)");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaPar > td:nth-child(4)");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr");
  await page.waitForTimeout(4000);

  const codigoNome = await page.$$eval(
    "#turmasAbertas > table > tbody > tr.agrupador > td > a > span",
    (el) => el.map((e) => e.innerHTML)
  );
  const turma = await page.$$eval("#turmasAbertas > table > tbody > tr > td.turma", (el) =>
    el.map((e) => e.innerHTML)
  );
  const nome = await page.$$eval("#turmasAbertas > table > tbody > tr > td.nome", (el) =>
    el.map((e) => e.innerHTML)
  );
  const local = await page.$$eval("#turmasAbertas > table > tbody > tr > td:nth-child(8)", (el) =>
    el.map((e) => e.innerHTML)
  );
  const horario = await page.$$eval("#turmasAbertas > table > tbody > tr > td:nth-child(4)", (el) =>
    el.map((e) => e.innerText.trim())
  );
  const matrizRef = await page.$$eval("#turmasAbertas > table > tbody > tr", (el) =>
    el.map((e) => e.className)
  );

  //console.log(codigoNome);
  //console.log(turma);
  //console.log(nome);
  //console.log(local);
  //console.log(horario);
  //console.log(matrizRef);

  const places = [
    "I1",
    "I2",
    "I3",
    "I4",
    "I5",
    "I6",
    "I7",
    "I8",
    "I9",
    "I10",
    "S1",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "S9",
    "S10",
    "MOCAP",
    "ANFITEATRO",
    "S-4",
    "S-3",
    "CONTAINER Nº 17",
    "LDTEA SALA 2",
    "LAB SS",
    "MULTIUSO",
    "LAB TERMODINÂMICA",
    "LAB SHP",
    "CONTEINER 04",
    "LAB TERMOFLUIDOS",
    "LAB NEI",
    "LAB NEI 2",
    "LAB MAT",
    "LAB ELETR",
    "LAB OND",
    "ANTE SALA",
    "LDTEA SALA 3",
  ];

  // tratar dados e joga-los no banco
  const subjects = Array.from(codigoNome).map((el) => ({
    codeId: el.split("-")[0].trim(),
    name: el.split("-")[1].trim(),
  }));

  //criar matriz de matérias DONE
  const matrizMaterias = codigoNome.map((materia) => {
    return materia.split("-")[0].trim();
  });

  // horario
  const newHorario = horario.map((horario) => {
    return horario.split(" ");
  });
  const cut = newHorario.map((sigla) => {
    let aux = [];
    for (i = 0; i < sigla.length; i++) {
      let index = sigla[i].indexOf("M");

      if (index === -1) {
        index = sigla[i].indexOf("T");
      }
      if (index === -1) {
        index = sigla[i].indexOf("N");
      }
      if (index !== -1) {
        let little = [];
        let days = sigla[i].slice(0, index);
        let period = sigla[i][index];
        let hour = sigla[i].slice(index + 1);
        little.push(days, period, hour); // dia padrao
        aux.push(little);
      }
    }
    return aux; // total
  });

  // cut = todos
  let hour = [];
  let day = [];

  for (k = 0; k < cut.length; k++) {
    const hourP = [];
    const dayP = [];
    for (l = 0; l < cut[k].length; l++) {
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

  const teacher = nome.map((prof) => {
    return prof.split("(")[0].trim();
  });

  const room = [];
  for (i = 0; i < local.length; i++) {
    const roomS = [];
    for (j = 0; j < places.length; j++) {
      if (local[i].includes(places[j])) {
        roomS.push(places[j]);
      }
    }

    if (roomS.length == 2 && roomS[1] == "LAB NEI 2") {
      roomS.shift();
    }
    room.push(roomS);
  }

  //decidir quando avançar ou nao
  for (h = 0; h < turma.length; h++) {}

  await browser.close();
})();
