const library = [];

function Book(title, author, year, status, image_path) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
    this.image_path = image_path
}

function addBookToHtml(title, author, year, status, image_path) {

    /* sets book card */

    const bookCard = document.createElement("div");
    const bookCover1 = document.createElement("img");
    const bookTitle = document.createElement("h3");
    bookCard.classList.add("book");
    bookCover1.src = image_path;
    bookTitle.textContent = title;

    bookCard.appendChild(bookCover1);
    bookCard.appendChild(bookTitle);

    /* sets modal dialog for book card */

    const modalDialog = document.createElement('dialog');
    modalDialog.classList.add("bookModal");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const bookCover2 = document.createElement("img");
    bookCover2.src = image_path;

    /* Title */

    const p1 = document.createElement("p");
    const span1 = document.createElement("span");
    p1.appendChild(span1);
    span1.textContent = "Title:  ";
    p1.append(title);
    
    /* Author */

    const p2 = document.createElement("p");
    const span2 = document.createElement("span");
    span2.textContent = "Author:  ";
    p2.appendChild(span2);
    p2.append(author);

    /* Year */

    const p3 = document.createElement("p");
    const span3 = document.createElement("span");
    span3.textContent = "Year:  ";
    p3.appendChild(span3);
    p3.append(String(year));

    /* Status */

    const statusDiv =  document.createElement("div");
    statusDiv.setAttribute("id", "divStatus")

    const p4 = document.createElement("p");
    const span4 = document.createElement("span");
    p4.appendChild(span4);
    span4.textContent = "Status:  ";
    p4.append(String(status));

    const changeBtn = document.createElement("button");
    changeBtn.textContent = "Change Status";

    statusDiv.append(p4, changeBtn);
    infoDiv.append(p1, p2, p3, statusDiv);
    modalDialog.append(bookCover2, infoDiv);

    bookCard.appendChild(modalDialog);


    /* Adds card to DOM */

    const bookList = document.querySelector(".book-list");
    bookList.appendChild(bookCard);

    /* Adds event listener */

    bookCard.addEventListener("click", (event) => {
        modalDialog.showModal()
    })
    
}

function addBookToArray(title, author, year, status, image_path) {
    library.push(new Book(title, author, year, status, image_path));
}

function addBookToLibrary(title, author, year, status, image_path) {

    /* adds book to array and html */

    addBookToArray(title, author, year, status, image_path);
    addBookToHtml(title, author, year, status, image_path);
}

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
    addBookToLibrary(title.value, author.value, year.value, readStatus.value, image_path.value);
    addModal.close();
})

