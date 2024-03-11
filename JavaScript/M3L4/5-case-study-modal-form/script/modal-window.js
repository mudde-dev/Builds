//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://medium.com/@nerdplusdog/a-how-to-guide-for-modal-boxes-with-javascript-html-and-css-6a49d063987e
//https://www.w3schools.com/howto/howto_css_modals.asp

let modalBtn1 = document.querySelector("#btnOpenModal1")

let pageContent = document.querySelector(".pageContent")
let pageContentInModal = document.querySelector(".pageContentInModal")
let closeBtn = document.querySelector(".windowModalHeader .btnCloseModal")

let modal1 = document.querySelector("#modal1");

modalBtn1.addEventListener('click', () => {
    modal1.style.display = "block";
    pageContentInModal.style.display = "block";
})


closeBtn.addEventListener('click', () => {
    modal1.style.display = "none";
    pageContentInModal.style.display = "none";
})

//if you want clicking outside shall close
window.addEventListener('click', (e) => {
    if (e.target == pageContentInModal) {
        modal1.style.display = "none";
        pageContentInModal.style.display = "none"
    }
})