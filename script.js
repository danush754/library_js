const myLibrary = [];


const addBookButton = document.getElementById('addBook')

addBookButton.addEventListener('click', () => {
  let book = getBookDetails()
    clearAddBookForm()
    CreateBookFromLibrary(book)
})

function Book(name,author,descriptiopn,rating,uuid) {

    if(!new.target){
        throw Error("You must use the `new` operator to call the constructor")
    }

    this.name = name
    this.author = author
    this.descriptiopn = descriptiopn
    this.rating = rating
    this.uuid = uuid
}

function addBookToLibrary(name, author, descriptiopn, rating, uuid) {
    
    let bookOfSpells = new Book(name, author, descriptiopn, rating, uuid)

    myLibrary.push(bookOfSpells)
    
    return bookOfSpells
}

function getBookDetails() {
    let name = document.getElementById('bookName').value;
    let authorName = document.getElementById('authorName').value;
    let bookDesc = document.getElementById('bookDesc').value; 
    let rating = document.getElementById('rating').value;
    let uuid = crypto.randomUUID()
    let book = addBookToLibrary(name,authorName,bookDesc,rating,uuid)
    
    return book
}

function clearAddBookForm(){
    document.getElementById('bookName').value = ""
    document.getElementById('authorName').value = ""
    document.getElementById('bookDesc').value = ""
    document.getElementById('rating').value = ""
}


function CreateBookFromLibrary(Book) {
    var star = "";

    for(let i = 0; i< Book.rating; i++){
         star =  star.concat(`<i class="fa-solid fa-star"></i>`) 
    }
   
   document.querySelector(".bookCardContainer").innerHTML += `<div class="bookCard" data-id="${Book.uuid}">
   <h3 class="bookTitle">${Book.name}</h3>
   <p class="bookAuthor">- By ${Book.author}</p>
   <p class="description">${Book.descriptiopn}
   </p>
   <div class="rating">${star}</div>
   <button type="button" class="bookRemoveBtn" data-id="${Book.uuid}">Remove</button>
 </div>`

  
}


document.querySelector(".bookCardContainer").addEventListener('click', function(event) {
    if(event.target.classList.contains('bookRemoveBtn')){
        var data_id = event.target.getAttribute("data-id");
        console.log("data-id", data_id);

     var cards =  document.querySelectorAll(".bookCard")

     cards.forEach(element => {
      var dataId =   element.getAttribute("data-id")
      if(dataId == data_id){
        element.remove()
      }

     })

         
    }
})