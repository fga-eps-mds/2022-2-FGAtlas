const puppeteer = require("puppeteer");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");
const morgan = require("morgan");

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
  // console.log(nome);
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

  //criar materias TODO
  //const createMany = await prisma.subject.createMany({ data: subjects });

  //criar matriz de matérias
  const matrizMaterias = codigoNome.map((materia) => {
    return materia.split("-")[0].trim();
  });

  // criar classe
  for (i = 0; i < turma.length; i++) {
    //pegar professor
    const teacher = nome[i].split("(")[0].trim();

    //pegar local
    const room = [];
    places.map((place) => {
      if (local[i].includes(place)) {
        room.push(place);
      }
    });
    if (room.length == 2 && room[1] == "LAB NEI 2") {
      room.shift();
    }

    //pegar horario
    const newHorario = horario[i].split(" ");

    const cut = [];
    newHorario.map((sigla) => {
      let index = sigla.indexOf("M");
      if (index == -1) {
        index = sigla.indexOf("T");
      }
      if (index == -1) {
        index = sigla.indexOf("N");
      }
    });

    const day = cut.map((esqueminha) => {});

    console.log(newHorario);
  }

  await browser.close();
})();
