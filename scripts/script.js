const library = [];

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector('#year');
const readStatus = document.querySelector("#status");
const image_path = document.querySelector("#coverImagePath");

const addModal = document.querySelector(".addModal");
const addButton = document.querySelector("#addButton");

const addCard = document.querySelector("#addCard")

/* event listener to open dialog to add new book */

addCard.addEventListener("click", (event) => {
    addModal.showModal()
})

/* event listener to add new book (to both array & html) */

addButton.addEventListener("click", (event) => {
    addBookToLibrary(title, author, year, readStatus, image_path);
    addModal.close();
})



