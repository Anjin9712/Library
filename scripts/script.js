/* main variables: library, inputs and modal dialogs */

const library = [];

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const yearInput = document.querySelector('#year');
const readStatusInput = document.querySelector("#status");
const imagePathInput = document.querySelector("#coverImagePath");

const modalContainerAdd = document.querySelector(".addModal");

/* event listener to add new book (to both array & html) */

const buttonAdd = document.querySelector("#addButton");
buttonAdd.addEventListener("click", (event) => {
    addBookToLibrary(titleInput, authorInput, yearInput, readStatusInput, imagePathInput);
    modalContainerAdd.close();
    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    imagePathInput.value = "";
    readStatusInput.value = "";
})

const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        buttonAdd.click();
    }
})

/* event listener to open dialog to add new book */

const cardAddNew = document.querySelector("#addCard");
cardAddNew.addEventListener("click", (event) => {
    modalContainerAdd.showModal();
})

/* event listener to filter by author, year or status */

const filterButton = document.querySelector("#filterButton");

filterButton.addEventListener("click", (event) => {
    displayFiltered(library);
})