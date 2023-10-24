
function Book(title, author, year, status, image_path) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
    this.image_path = image_path
}

function dash(string) {
    return string.replace(/ /g, "-").toLowerCase()
}

function setBookCard(title, image_path) {

    /* sets book card */

    const bookCard = document.createElement("div");
    const bookCover1 = document.createElement("img");
    const bookTitle = document.createElement("h3");
    bookCard.classList.add("book");
    bookCover1.src = image_path;
    bookTitle.textContent = title;

    bookCard.appendChild(bookCover1);
    bookCard.appendChild(bookTitle);

    return bookCard
}

function setContent(text, variable) {

    const p = document.createElement("p");
    const span = document.createElement("span");
    span.textContent = text;
    p.appendChild(span);
    p.append(String(variable));

    return p
}

function setModalDialog(title, author, year, status, image_path) {

    /* sets modal dialog for book card */

    const modalDialog = document.createElement('dialog');
    modalDialog.classList.add("bookModal");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const bookCover2 = document.createElement("img");
    bookCover2.src = image_path;

    /* Title */

    const p1 = setContent("Title:  ", title)
    
    /* Author */

    const p2 = setContent("Author:  ", author)
    /* Year */

    const p3 = setContent("Year:  ", year)

    /* Status */

    const statusDiv =  document.createElement("div");
    statusDiv.setAttribute("id", "divStatus")

    const p4 = setContent("Status:  ", status)

    const changeBtn = document.createElement("button");
    changeBtn.textContent = "Change Status";

    statusDiv.append(p4, changeBtn);
    infoDiv.append(p1, p2, p3, statusDiv);
    modalDialog.append(bookCover2, infoDiv);

    return modalDialog
}

function setFilterHTML(attribute, type) {

    const div = document.createElement("div");
    let attributeId = dash(attribute);

    if(!isNaN(parseInt(attribute))) {
        attributeId = `a${attribute}`
    }

    div.classList.add(attributeId, type);

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    label.textContent = attribute;
    checkbox.setAttribute('type', "checkbox");
    checkbox.value = dash(attribute);

    div.append(label, checkbox);

    return div   
}

function setFilters(author, year, status) {

    const valuesArr = [author.value, year.value, status.value];
    const attributesArr = [author.id, year.id, status.id];
    
    for (let i = 0; i < 3; i++) {
        let valueId = dash(valuesArr[i]);

        if(!isNaN(parseInt(valuesArr[i]))) {
            valueId = `a${valueId}`
        }

        const category = document.querySelector(`#${attributesArr[i]}Filter`);
        let divClass = document.querySelector(`#${attributesArr[i]}Filter .${valueId}`);
        const type = attributesArr[i]
            
        if (divClass === null) {

            const div = setFilterHTML(valuesArr[i], type);
            category.appendChild(div);
        }
    }
}

function addBookToHtml(title, author, year, status, image_path) {

    const bookCard = setBookCard(title, image_path);
        
    const modalDialog = setModalDialog(title, author, year, status, image_path)
    
    bookCard.appendChild(modalDialog);
    bookCard.setAttribute('id', `${dash(title)}`)
    bookCard.classList.add(`${dash(author)}`, `a${year}`, `${dash(status)}`);


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

    addBookToArray(title.value, author.value, year.value, status.value, image_path.value);
    addBookToHtml(title.value, author.value, year.value, status.value, image_path.value);
    setFilters(author, year, status);
}

function removeBookFromHTML(title) {
    const book = document.querySelector(`#${dash(title)}`);
    book.remove();
}

function removeBookFromArray(title) {
    library.forEach(book, index => {
        if (book["title"] == title) {
            library.splice(index, 1);
        }
    })
}

function filterByAttribute(filtersObj, library) {

    /* iterates over the library and evaluates if any of the book's attributes 
    fulfills at least one of the filters*/

    library.forEach((book) => {
        const id = "#" + dash(book["title"]);
        const bookCard = document.querySelector(id);
        const filtersKeys = Object.keys(filtersObj);

        const keep = filtersKeys.some(key => {

            const filterValueIndex = filtersObj[key].indexOf(dash(book[key]));

            if (dash(book[key]) !== filtersObj[key][filterValueIndex] && Object.keys(filtersObj).length >= 1) {
                return false
    
            } else if (dash(book[key]) == filtersObj[key][filterValueIndex] && Object.keys(filtersObj).length >= 1) {
                return true

            } else if (Object.keys(filtersObj).length == 0) {
                return true
            }
        })

        if (keep) {
            bookCard.style.display = "flex";
        } else {
            bookCard.style.display = "none";
        }
    })
}