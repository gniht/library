let myLibrary = [];

const libraryUI = document.createElement("div");
document.body.appendChild(libraryUI);

function Book(author, title, numberOfPages){ 
  this.author = author;
  this.title = title;
  this. numberOfPages = numberOfPages; 
}

function addBookToLibrary(){

}

function displayBookShelf(){
  const booklist = document.createElement("ul");
  libraryUI.appendChild(booklist);
  
  myLibrary.forEach(book => {
    const temp = document.createElement('li');
    temp.innerText = `${book.title}, by ${book.author} : ${book.numberOfPages} pages.`
    booklist.appendChild(temp);
  });    
}

