import * as modalController from './modal-controller.js';



export function init() {
    const btnLink = document.querySelector(".contact-link");
    btnLink.addEventListener('click', handleBtnLinkClick);
}

function handleBtnLinkClick(event) {
    event.preventDefault();
    modalController.activeModal();
}