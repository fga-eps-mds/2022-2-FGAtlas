# 2022-2-Squad04 - FGAtlas

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com">
    <img src="Docs/FGAtlasLogo-01.jpg" alt="Logo" width="550" height="430">
  </a>

  <h3 align="center">FGAtlas</h3>

  <p align="center">
    Um incrível mapa para se localizar na FGA!
    <br />
    <a href="https://github.com/fga-eps-mds/2022-2-FGAtlas/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/fga-eps-mds/2022-2-FGAtlas/issues">Recomendar Feature</a>
  </p>
</div>
<h4 align="center"> 
	🚧 Em construção...  🚧
</h4>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Conteúdo</summary>
  <ol>
    <li>
      <a href="#Sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#Tecnologias">Tecnologias</a></li>
      </ul>
    </li>
    <li><a href="#Pré-requisitos">Pre-Requisitos</a></li>
    <li><a href="#Como-rodar">Como rodar</a></li>
    <li><a href="#Backlog-do-produto">Backlog do produto</a></li>
    <li><a href="#Devenvolvedores">Desenvolvedores</a></li>
    <li><a href="#Como-contribuir">Como contribuir</a></li>
    <li><a href="#licença">Licença</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## :earth_americas: Sobre o projeto

FGAtlas é um projeto web que fornece a localização dos prédios e salas da FGA, a fim de auxiliar calouros e veteranos a encontrarem os locais onde terão suas aulas. A ideia surgiu após a equipe realizar, em grupos da faculdade, uma pesquisa via forms na qual questionava os estudantes qual era a maior dificuldade dos mesmos no campus, a grande parte das respostas foram direcionadas à questões envolvendo localização. 

<p align="right">(<a href="#readme-top">Voltar</a>)</p>

## :hammer: Tecnologias

Tecnologias utilizadas neste repositório: 

![Tecnologias](https://skillicons.dev/icons?i=js,html,css,react,nodejs,typescript,vite,git,github,prisma)

<!-- GETTING STARTED -->
## :exclamation: Pré-requisitos

Antes de começar, você precisa ter instalado as seguintes ferramentas: Postgres14, NodeJs e git.

## :chart_with_upwards_trend: Como rodar

Para executar o backend:
1.	Clone o repositório
	
2. 	Inicie o Postgres com o nome do banco de desenvolvimento

3. 	Instale todas as dependências do repositório com:
```
npm install
```
	
4.	Faça as migrations do banco de dados com: 

```
npm run migrate_dev
```

5.	Inicie a aplicação com, isto já garante que o banco de dados estará populado:

```
npm run start
```

Para executar o frontend:
1. Clone o repositório

2. Vá para a pasta do vite

3. Instale todas as dependências com:
```
npm install
```

4. Execute no terminal:

```
npm run dev
```

Para executar os testes do backend:
1. 	Clone o repositório
2. 	Inicie o Postgres com o nome do banco de desenvolvimento

3. 	Instale todas as dependências do repositório com:
```
npm install
```
4. 	Inicie os testes com:
```
npm run tests
```

## :orange_book: Backlog do produto


## :smile: Desenvolvedores

<center>
<table style="margin-left: auto; margin-right: auto;">
    <tr>
        <td align="center">
            <a href="https://github.com/ccarlaa">
                <img style="border-radius: 50%;" src="https://github.com/ccarlaa.png" width="150px;"/>
                <h5 class="text-center">Carla Clementino</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/deboracaires">
                <img style="border-radius: 50%;" src="https://github.com/deboracaires.png" width="150px;"/>
                <h5 class="text-center">Debora Caires</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/bot-do-jao">
                <img style="border-radius: 50%;" src="https://github.com/bot-do-jao.png" width="150px;"/>
                <h5 class="text-center">João Pedro</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/kaua-pt">
                <img style="border-radius: 50%;" src="https://github.com/kaua-pt.png" width="150px;"/>
                <h5 class="text-center">Kauã Vinícius</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/Lizdtre">
                <img style="border-radius: 50%;" src="https://github.com/Lizdtre.png" width="150px;"/>
                <h5 class="text-center">Paulo Renato</h5>
            </a>
        </td>
         <td align="center">
            <a href="https://github.com/StrangeUnit28">
                <img style="border-radius: 50%;" src="https://github.com/StrangeUnit28.png" width="150px;"/>
                <h5 class="text-center">Rafael Brito</h5>
            </a>
        </td>
	<td align="center">
            <a href="https://github.com/sabrinaberno">
                <img style="border-radius: 50%;" src="https://github.com/sabrinaberno.png" width="150px;"/>
                <h5 class="text-center">Sabrina Berno</h5>
            </a>
        </td>
</table>

</center>


<!-- CONTRIBUTING -->
## :question: Como contribuir 



<!-- LICENSE -->
## :dash: Licença

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/fga-eps-mds/2022-2-FGAtlas.svg?style=for-the-badge
[contributors-url]:https://github.com/fga-eps-mds/2022-2-FGAtlas/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fga-eps-mds/2022-2-FGAtlas.svg?style=for-the-badge
[forks-url]: https://github.com/fga-eps-mds/2022-2-FGAtlas/network/members
[stars-shield]: https://img.shields.io/github/stars/fga-eps-mds/2022-2-FGAtlas.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/fga-eps-mds/2022-2-FGAtlas.svg?style=for-the-badge
[issues-url]: https://github.com/fga-eps-mds/2022-2-FGAtlas/issues
[license-shield]: https://img.shields.io/github/license/fga-eps-mds/2022-2-FGAtlas.svg?style=for-the-badge
[license-url]: https://github.com/fga-eps-mds/2022-2-FGAtlas/blob/main/LICENSE
[product-screenshot]: images/screenshot.png

