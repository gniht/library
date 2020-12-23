
class Book{
  constructor(author, title, numberOfPages){ 
    this.author = author;
    this.title = title;
    this. numberOfPages = numberOfPages;
    this.haveRead = false;
  }
  toggleHaveRead = function(){
    if(haveRead){
      haveRead = false;
    }else{
      haveRead = true;
    }
  } 
}
let myLibrary = [new Book("noth", "bites and bits", 23)];

const libraryUI = document.createElement("div");
document.body.appendChild(libraryUI);

const addBook = document.createElement("button");
addBook.textContent = "Add a book to your library."

const showBooks = document.createElement("button");
showBooks.textContent = "Display your bookshelf."
libraryUI.append(addBook, showBooks);

libraryUI.addEventListener("click", e=>{ 
  if(e.target.innerText === "Add a book to your library."){
    addBook.remove();
    showBooks.remove();
    addBookToLibrary();
  }
  if(e.target.innerText === "Display your bookshelf."){
    addBook.remove();
    showBooks.remove();
    displayBookShelf();
  }
});







function addBookToLibrary(){
  // const newBookForm = document.createElement("form");
  // newBookForm.setAttribute("method", "post");
  // newBookForm.setAttribute("class", "newBookForm");

  // const authorDiv = document.createElement("div");
  // const authorLabel = document.createElement("label");
  // authorLabel.setAttribute("for", "author");
  // authorLabel.innerText = "Author: ";
  // const author = document.createElement("input");
  // author.setAttribute("id", "author");
  // author.setAttribute("name", "author"); 
  // author.setAttribute("type", "text");
  // authorDiv.append(authorLabel, author)
  
  // const titleDiv = document.createElement("div");
  // const titleLabel = document.createElement("label");
  // titleLabel.setAttribute("for", "title");
  // titleLabel.innerText = "Title: ";
  // const title = document.createElement("input");
  // title.setAttribute("id", "title");
  // title.setAttribute("name", "title"); 
  // title.setAttribute("type", "text");
  // titleDiv.append(titleLabel, title);

  // const pagesDiv = document.createElement("div");
  // const pagesLabel = document.createElement("label");
  // pagesLabel.setAttribute("for", "pages");
  // pagesLabel.innerText = "Pages: ";
  // const pages = document.createElement("input");
  // pages.setAttribute("id", "pages");
  // pages.setAttribute("name", "pages"); 
  // pages.setAttribute("type", "text");
  // pagesDiv.append(pagesLabel, pages);
  
  // const submitBtn = document.createElement("input");
  // submitBtn.setAttribute("type", "submit");    
  // submitBtn.setAttribute("value", "Add book to library");
  // newBookForm.append(authorDiv, titleDiv, pagesDiv, submitBtn);  

  // libraryUI.append(newBookForm);

  // newBookForm.addEventListener("submit", e =>{
  //   myLibrary.push(new Book(author, title, pages));
  //   newBookForm.removeEventListener("submit");
  //   libraryUI.remove(newBookForm);
  //   libraryUI.append(addBook, showBooks);
  // });
  let author = prompt("Enter author of book.");
  let title = prompt("Enter book title.");
  let numPages = prompt("Enter number of pages.");
  myLibrary.push(new Book(author, title, numPages));
  libraryUI.append(addBook, showBooks);
}

function displayBookShelf(){  
  const booklist = document.createElement("ul");  
  libraryUI.append(booklist);
  
  myLibrary.forEach(book => {
    const temp = document.createElement('li');      
    temp.innerHTML = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.numberOfPages}, Finished reading: ${book.haveRead} <input type='button'></input>`;
    booklist.append(temp);
  });    
}


