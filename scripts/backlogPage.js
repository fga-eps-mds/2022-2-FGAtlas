const backlog = document.querySelector('.backlog');
backlog.innerHTML += `
    <div class="logo-about-page" onclick="goToAbout()">
        <img src="./assets/Logo.png" alt="" />
        <h1>FGAtlas</h1>
    </div>
    <div class='menu-about-page'>
        <h1 onclick='goBacklogGoHome()'> HomePage </h1>
        <h1 onclick='goAboutGoBacklog()()'> Sobre o projeto </h1>
        <h1 onclick='goUseGoBacklog()'> Como usar o projeto </h1>
    </div>
    <div class='backlog-container'>
        <h1>Backlog do produto</h1>
        <div class='image-backlog'></div>
    </div>
`;