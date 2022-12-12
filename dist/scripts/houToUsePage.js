const howToUse = document.querySelector(".how-to-use");
howToUse.innerHTML += `
    <div class="logo-about-page" onclick="goToAbout()">
        <img src="./assets/Logo.png" alt="" />
        <h1>FGAtlas</h1>
    </div>
    <div class='menu-about-page'>
        <h1 onclick='goToHowToUse()'> HomePage </h1>
        <h1 onclick='leaveAboutGoUse()'> Sobre o projeto </h1>
        <h1> Backlog </h1>
    </div>
    <div class='scripts-container'>
        <div class='single-instruction'>
            <div class='horizontal-line'></div>
            <h1>Pré-requisitos</h1>
            <div class='horizontal-line'></div>
            <h2>Antes de começar, você precisa ter instalado as seguintes ferramentas: Postgres14, NodeJs e git.</h2>
        </div>
        <div class='single-instruction'>
            <div class='horizontal-line'></div>
            <h1>Como rodar</h1>
            <div class='horizontal-line'></div>
            <h2>Para executar o backend:</h2>
            <ul>
                <li>1. Clone o repositório;</li>
                <li>2. Inicie o Postgres com o nome do banco de desenvolvimento;</li>
                <li>3. Instale todas as dependências do repositório com:</li>
                <div>npm install</div>
                <li>4. Faça as migrations do banco de dados com:</li>
                <div>npm run migrate_dev</div>
                <li>5. Inicie a aplicação com o comando::</li>
                <div>npm run start</div>
            </ul>
            <h2>Para executar o frontend:</h2>
            <ul>
                <li>1. Clone o repositório;</li>
                <li>2. Vá para a pasta do vite;</li>
                <li>3. Instale todas as dependências com:</li>
                <div>npm install</div>
                <li>4. Execute no terminal:</li>
                <div>npm run dev</div>
                <li>5. Inicie a aplicação com o comando::</li>
                <div>npm run start</div>
            </ul>
            <h2>Para executar os testes do backend:</h2>
            <ul>
                <li>1. Clone o repositório;</li>
                <li>2. Inicie o Postgres com o nome do banco de desenvolvimento;</li>
                <li>3. Instale todas as dependências do repositório com:</li>
                <div>npm install</div>
                <li>4. Inicie os testes com:</li>
                <div>npm run tests</div>
            </ul>
        </div>
    </div>
`;
