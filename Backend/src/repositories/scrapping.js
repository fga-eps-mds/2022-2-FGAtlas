const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://sigaa.unb.br/sigaa/public/turmas/listar.jsf");
  await page.select('select[id="formTurma:inputDepto"]', "673");
  await page.click('input[name="formTurma:j_id_jsp_1370969402_11"]');

  await page.waitForSelector("#turmasAbertas > table > tbody > tr.agrupador > td > a > span");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td.turma");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td.nome");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td:nth-child(8)");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaPar > td:nth-child(4)");

  await page.waitForTimeout(4000);

  const codigoNome = await page.$$eval(
    "#turmasAbertas > table > tbody > tr.agrupador > td > a > span",
    (el) => {
      return el.map((e) => e.innerHTML);
    }
  );
  const turma = await page.$$eval("#turmasAbertas > table > tbody > tr > td.turma", (el) => {
    return el.map((e) => e.innerHTML);
  });
  const nome = await page.$$eval("#turmasAbertas > table > tbody > tr > td.nome", (el) => {
    return el.map((e) => e.innerHTML);
  });
  const local = await page.$$eval("#turmasAbertas > table > tbody > tr > td:nth-child(8)", (el) => {
    return el.map((e) => e.innerHTML);
  });
  const horario = await page.$$eval(
    "#turmasAbertas > table > tbody > tr > td:nth-child(4)",
    (el) => {
      return el.map((e) => e.innerText);
    }
  );

  console.log(codigoNome);
  console.log(turma);
  console.log(nome);
  console.log(local);
  console.log(horario);

  //verificar por class, pegar flags, colocar num array e ai sim fazer a iteração

  //await browser.close();
})();
