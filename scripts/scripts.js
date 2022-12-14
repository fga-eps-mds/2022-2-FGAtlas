function closeMenu() {
    const input = document.querySelector('#menu');
    input.click();
}
function goToAbout() {
    const container = document.querySelector('.container');
    const div = document.querySelector('.about-project');
    if (!container.classList.contains('hide')) {
        container.classList.add('hide');
        div.classList.remove('hide');
    } else {
        container.classList.remove('hide');
        div.classList.add('hide');
    }
    
}

function goToHowToUse() {
    const container = document.querySelector('.container');
    const div = document.querySelector('.how-to-use');
    if (!container.classList.contains('hide')) {
        container.classList.add('hide');
        div.classList.remove('hide');
    } else {
        container.classList.remove('hide');
        div.classList.add('hide');
    }
}

function leaveAboutGoUse() {
    const container = document.querySelector('.about-project');
    const div = document.querySelector('.how-to-use');
    if (!container.classList.contains('hide')) {
        container.classList.add('hide');
        div.classList.remove('hide');
    } else {
        container.classList.remove('hide');
        div.classList.add('hide');
    }
}

function goBacklogGoHome() {
    const container = document.querySelector('.container');
    const div = document.querySelector('.backlog');
    console.log(container, 'container')
    console.log(div, 'div')
    if (!container.classList.contains('hide')) {
        container.classList.add('hide');
        div.classList.remove('hide');
    } else {
        container.classList.remove('hide');
        div.classList.add('hide');
    }
}

function goUseGoBacklog() {
    const container = document.querySelector('.how-to-use');
    const div = document.querySelector('.backlog');
    if (!container.classList.contains('hide')) {
        container.classList.add('hide');
        div.classList.remove('hide');
    } else {
        container.classList.remove('hide');
        div.classList.add('hide');
    }
}

function goAboutGoBacklog() {
    const container = document.querySelector('.about-project');
    const div = document.querySelector('.backlog');
    if (!container.classList.contains('hide')) {
        container.classList.add('hide');
        div.classList.remove('hide');
    } else {
        container.classList.remove('hide');
        div.classList.add('hide');
    }
}