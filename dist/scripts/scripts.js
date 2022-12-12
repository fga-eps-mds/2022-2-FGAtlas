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