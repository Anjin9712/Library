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
})

/* event listener to open dialog to add new book */

const cardAddNew = document.querySelector("#addCard");
cardAddNew.addEventListener("click", (event) => {
    modalContainerAdd.showModal();
})

/* event listener to filter by author, year or status */

const filterButton = document.querySelector("#filterButton");

filterButton.addEventListener("click", (event) => {
    const filterCategories = document.querySelectorAll(".filters > form > div");

    const filters = {};

    for (let i of filterCategories) {
        const category = i.querySelectorAll("div");
        for (let j of category) {
            const key = j.classList[1];
            let element = j.classList[0];
            if (key == "year") {
                element = element.slice(1);
            }
            const isChecked = j.querySelector("input").checked;
    
            if (isChecked && !filters.hasOwnProperty(key)) {
                filters[key] = [element];
            } else if (isChecked && filters.hasOwnProperty(key)) {
                filters[key].push(element)
            }
        }
    }

    filterByAttribute(filters, library)
})