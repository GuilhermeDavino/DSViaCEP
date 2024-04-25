function State() {
    
    this.modalContainer = null;
    this.modalCloseBtn = null
}

const state = new State();

export function init() {
    state.modalContainer = document.querySelector("#modal-contact");
    state.modalCloseBtn = document.querySelector("#btn-close-modal");

    state.modalCloseBtn.addEventListener('click', handleBtnModalClose);
    state.modalContainer.addEventListener('click', handleModalClose);


}

function handleBtnModalClose(event) {
    event.preventDefault();
    console.log("Hello")
    closeModal();
}

function handleModalClose(event) {
    if(event.target === this) {
        closeModal();
    }
}

function closeModal() {
    state.modalContainer.classList.remove("active");
}

export function activeModal() {
    state.modalContainer.classList.add("active");
}