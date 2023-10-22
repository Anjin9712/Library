const library = [];

function Book(title, author, year, status, image_path) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
    this.image = image_path
}

function addBookToHtml(title, author, year, status, image_path) {

    /* sets book card */

    const bookCard = document.createElement("div");
    const bookCover = document.createElement("img");
    const bookTitle = document.createElement("h3");
    bookCard.classList.add("book");
    bookCover.src = image_path;
    bookTitle.textContent = title;
    bookCard.appendChild(bookCover);
    bookCard.appendChild(bookTitle);

    /* sets dialog for book card*/

}

function addBookToLibrary(title, author, year, status, image_path) {

    /* adds book to array and html */

    library.push(new Book(title, author, year, status, image_path));
    addBookToHtml(title, author, year, status, image_path);
}

/* events to open and close addModal dialog */

/*
const addCardContainer = document.querySelector(".add-container");
const addBookModal = document.querySelector(".addModal");
addCardContainer.addEventListener('click', (event) => {
    addBookModal.showModal();
})
*/

/* event listener to add new book (to both array & html) */

/*const addBtn = document.querySelector("#add-button");
addBtn.addEventListener("click", (event) => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const year = document.querySelector("#year").value;
    const status = document.querySelector("#status").value;
    const image = document.querySelector("#image").value;

    addBookToLibrary(title, author, year, status, image)
    console.log(library)
})

/* event listener to open and close bookModal dialog */

const books = document.querySelectorAll(".book");

books.forEach(book => {
    book.addEventListener("click", (event) => {
        const bookModal = book.querySelector(".bookModal");
        bookModal.showModal()
    })
})