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
        div.scrollIntoView();
        closeMenu();
    } else {
        container.classList.remove('hide');
        div.classList.add('hide')
    }
}

function goToHomePage() {

}

