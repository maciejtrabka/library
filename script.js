function Book(author, title, pages, readStatusValue) {
    this.author = author,
        this.title = title,
        this.pages = pages
    this.readStatusValue = readStatusValue
}

let arrayToHoldBooks = [];
let htmlToDisplayArray = document.querySelector('#htmlToDisplayArray')
    //a jak robie parametry to nazywac je tak ja zmienną którą mam czy silić się na jakąś ogólność
function renderLibrary(arrayToHoldBooks) {
    htmlToDisplayArray.innerHTML = "";
    for (var i = 0; i <= arrayToHoldBooks.length - 1; i++) {

        var divContainerForDisplayArray = document.createElement('div');
        htmlToDisplayArray.appendChild(divContainerForDisplayArray);
        divContainerForDisplayArray.setAttribute('id', `divContainerForDisplayArray${i}`);

        var container = document.createElement('div');
        divContainerForDisplayArray.appendChild(container);
        container.setAttribute('id', `container`);
        container.textContent = `The Book`

        var author = document.createElement('div');
        container.appendChild(author);
        author.setAttribute('id', `author`);
        author.textContent = `Author: ${arrayToHoldBooks[i].author}`

        var title = document.createElement('div');
        container.appendChild(title);
        title.setAttribute('id', `title`);
        title.textContent = `Title: ${arrayToHoldBooks[i].title}`

        var pages = document.createElement('div');
        container.appendChild(pages);
        pages.setAttribute('id', `pages`);
        pages.textContent = `Pages: ${arrayToHoldBooks[i].pages}`

        var readStatusDescription = document.createElement('div');
        container.appendChild(readStatusDescription);
        readStatusDescription.setAttribute('id', `readStatusDescription`);
        readStatusDescription.textContent = "Read?"

        var readStatus = document.createElement('INPUT');
        container.appendChild(readStatus);
        readStatus.setAttribute('id', `readStatus${i}`);
        readStatus.setAttribute("type", "checkbox");
        readStatus.setAttribute("style", "position:relative;left:50px");
        setCheckBoxInBook(i)
        readStatus.addEventListener('change', changeArrayReadStatusValue(i))

        var btnToRemove = document.createElement('button');
        container.appendChild(btnToRemove);
        btnToRemove.setAttribute('id', `btnToRemove`);
        btnToRemove.textContent = `Remove Book`;
        btnToRemove.addEventListener("click", removeBook(i));
    }
}

function changeArrayReadStatusValue(i) {
    return function() {
        if (document.getElementById(`readStatus${i}`).checked) {
            return arrayToHoldBooks[i].readStatusValue = true
        } else {
            return arrayToHoldBooks[i].readStatusValue = false
        };
    }
}

function removeBook(bookNumberinArray) {
    return function() {
        arrayToHoldBooks.splice(bookNumberinArray, 1)
        renderLibrary(arrayToHoldBooks)
    }
}

function checkCheckBoxInForm() {
    if (document.getElementById("readStatusInput").checked) { return true } else { return false };
}

function setCheckBoxInBook(bookNumberinArray) {
    if (arrayToHoldBooks[bookNumberinArray].readStatusValue === true) {
        document.getElementById(`readStatus${bookNumberinArray}`).checked = true;
    }
}


let htmlToHoldDisplayForm = document.getElementById('htmlToHoldDisplayForm')

function addBook() {
    let author = document.getElementById('authorInput').value
    let title = document.getElementById('titleInput').value
    let pages = document.getElementById('pagesInput').value
    let readStatusValue = checkCheckBoxInForm()
    arrayToHoldBooks.push(new Book(author, title, pages, readStatusValue))
    renderLibrary(arrayToHoldBooks)
    htmlToHoldDisplayForm.removeChild(htmlToHoldDisplayForm.childNodes[0]) //to hide form
}

function newAddBookForm() {

    var htmlToDisplayForm = document.createElement('form');
    htmlToHoldDisplayForm.appendChild(htmlToDisplayForm);
    htmlToDisplayForm.setAttribute('id', 'htmlToDisplayForm');
    htmlToDisplayForm.setAttribute('onsubmit', 'return false');
    htmlToDisplayForm.addEventListener('submit', addBook);

    var authorInputLabel = document.createElement('label');
    htmlToDisplayForm.appendChild(authorInputLabel);
    authorInputLabel.setAttribute('id', 'authorInputLabel');
    authorInputLabel.setAttribute('for', 'authorInput');
    authorInputLabel.textContent = 'Author:'

    var authorInput = document.createElement('INPUT');
    htmlToDisplayForm.appendChild(authorInput);
    authorInput.setAttribute('id', 'authorInput');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('name', 'authorInput')
    authorInput.setAttribute('maxlength', '31');

    var titleInputLabel = document.createElement('label');
    htmlToDisplayForm.appendChild(titleInputLabel);
    titleInputLabel.setAttribute('id', 'titleInputLabel');
    titleInputLabel.setAttribute('for', 'titleInput');
    titleInputLabel.textContent = `Title: `

    var titleInput = document.createElement('INPUT');
    htmlToDisplayForm.appendChild(titleInput);
    titleInput.setAttribute('id', 'titleInput');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'titleInput')
    titleInput.setAttribute('maxlength', '32');

    var pagesInputLabel = document.createElement('label');
    htmlToDisplayForm.appendChild(pagesInputLabel);
    pagesInputLabel.setAttribute('id', 'pagesInputLabel');
    pagesInputLabel.setAttribute('for', 'pagesInput');
    pagesInputLabel.textContent = 'Pages: '

    var pagesInput = document.createElement('INPUT');
    htmlToDisplayForm.appendChild(pagesInput);
    pagesInput.setAttribute('id', 'pagesInput');
    pagesInput.setAttribute('type', 'text');
    pagesInput.setAttribute('name', 'pagesInput')
    pagesInput.setAttribute('maxlength', '32');

    var readStatusInputLabel = document.createElement('label');
    htmlToDisplayForm.appendChild(readStatusInputLabel);
    readStatusInputLabel.setAttribute('id', 'readStatusInputLabel');
    readStatusInputLabel.setAttribute('for', 'readStatusInput');
    readStatusInputLabel.textContent = 'Read?:'

    var readStatusInput = document.createElement('INPUT');
    htmlToDisplayForm.appendChild(readStatusInput);
    readStatusInput.setAttribute('id', 'readStatusInput');
    readStatusInput.setAttribute('type', 'checkbox');
    readStatusInput.setAttribute('name', 'readStatusInput')

    var submitBtn = document.createElement('INPUT');
    htmlToDisplayForm.appendChild(submitBtn);
    submitBtn.setAttribute('id', 'submitBtn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Add Next Book')
}

let newBookBtn = document.querySelector('#newBookBtn');
newBookBtn.addEventListener("click", newAddBookForm)