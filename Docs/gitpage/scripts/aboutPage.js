const aboutProject = document.querySelector(".about-project");

aboutProject.innerHTML += `
    <div class="logo-about-page" onclick="goToAbout()">
      <img src="./assets/Logo.png" alt="" />
      <h1>FGAtlas</h1>
    </div>
    <div class='menu-about-page'>
      <h1 onclick='goToAbout()'> HomePage </h1>
      <h1> Como usar o projeto </h1>
      <h1> Backlog </h1>
    </div>
    <div class='oficial-logo'>
    </div>
    <div class='project-info'> 
      <h1> Sobre</h1>
      <h2>
      FGAtlas é um projeto web que fornece a localização dos prédios e salas da FGA, a fim de auxiliar calouros e veteranos a encontrarem os locais onde terão suas aulas. A ideia surgiu após a equipe realizar, em grupos da faculdade, uma pesquisa via forms na qual questionava os estudantes qual era a maior dificuldade dos mesmos no campus, a grande parte das respostas foram direcionadas à questões envolvendo localização.
      </h2>
    </div>
    <div class='tecnologies'>
      <h1> TECNOLOGIAS</h1>
      <div class="tecnologies-icons">
        <img src="./assets/icons8-javascript-48.png" alt="">
        <img src="./assets/icons8-html-5-48.png" alt="">
        <img src="./assets/icons8-css3-48.png" alt="">
        <img src="./assets/react-icon.png" alt="">
        <img src="./assets/node-icon.png" alt="">
        <img src="./assets/ts-icon.png" alt="">
        <img src="./assets/github-icon.png" alt="">
      </div>
    </div>
    <h1 class="developers-title">TIME DE DESENVOLVIMENTO</h1>
    <div class="developers">
      <div class="developer-card">
        <img src="https://avatars.githubusercontent.com/u/86669458?v=4"/>
        <h1> Carla A. C. Ribeiro</h1>
        <a href="https://github.com/ccarlaa" target="_blank">github.com/ccarlaa</a>
      </div>
      <div class="developer-card">
        <img src="https://avatars.githubusercontent.com/u/87550053?v=4"/>
        <h1> Débora C. S. Moreira</h1>
        <a href="https://github.com/deboracaires" target="_blank">github.com/deboracaires</a>
      </div>
      <div class="developer-card">
        <img src="https://avatars.githubusercontent.com/u/89610777?v=4"/>
        <h1> João Nóbrega</h1>
        <a href="https://github.com/bot-do-jao" target="_blank">github.com/bot-do-joao</a>
      </div>
      <div class="developer-card">
        <img src="https://avatars.githubusercontent.com/u/81399319?v=4"/>
        <h1> Kauã Vinícius</h1>
        <a href="https://github.com/kaua-pt" target="_blank">github.com/kaua-pt</a>
      </div>
      <div class="developer-card">
        <img src="https://avatars.githubusercontent.com/u/92321749?v=4"/>
        <h1> Paulo</h1>
        <a href="https://github.com/Lizdtre" target="_blank">github.com/Lizdtre</a>
      </div>
      <div class="developer-card">
        <img src="https://avatars.githubusercontent.com/u/97995709?v=4"/>
        <h1> Rafael Bosi</h1>
        <a href="https://github.com/StrangeUnit28" target="_blank">github.com/StrangeUnit28</a>
      </div>
      <div class="developer-card">
        <img src="https://avatars.githubusercontent.com/u/86732411?v=4"/>
        <h1> Sabrina C. Berno</h1>
        <a href="https://github.com/sabrinaberno" target="_blank">github.com/sabrinaberno</a>
      </div>
    </div>
  `;
