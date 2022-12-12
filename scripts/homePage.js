const container = document.querySelector(".container");
container.innerHTML = `
    <div class="left">
    <div class="logo">
      <img src="./assets/Logo.png" alt="" />
      <h1>FGAtlas</h1>
    </div>
  </div>
  <div class="image"></div>
  <div class="right">
    <div class="position-icon">
      <input type="checkbox" id="menu">
      <label for="menu" class="icon">
        <div class="menu"></div>
      </label>
      <nav>
        <div class="options">
          <h1 onclick="goToAbout(), closeMenu()">Sobre o projeto</h1>
          <h1 onclick="goToHowToUse(), closeMenu()">Como usar o projeto</h1>
          <h1>Backlog</h1>

        </div>
      </nav>
    </div>

    <div class="softwareInfo">
      <h1>
      FGAtlas é um projeto web que fornece a localização dos prédios e salas da FGA, a fim de auxiliar calouros e veteranos a encontrarem os locais onde terão suas aulas. A ideia surgiu após a equipe realizar, em grupos da faculdade, uma pesquisa via forms na qual questionava os estudantes qual era a maior dificuldade dos mesmos no campus, a grande parte das respostas foram direcionadas à questões envolvendo localização.
      </h1>
      <a href='https://github.com/fga-eps-mds/2022-2-FGAtlas' target='_blank'> <div class='link-github'>Repositório GitHub  </div></a>
      <div class='unb-logos'>
        <img src='./assets/unb-logo.png' alt=''/>
        <div>
          <h1> Universidade de Brasília </br></h1>
          <h1> Faculdade do Gama</h1>
        </div>
      </div>
    </div>
  </div>

    `;
