let myLibrary = [];
let index = 0;


function createForm(){
	var b = document.getElementById("insertForm");
	var f = document.getElementById("form_container"); 
	b.style.visibility = 'hidden';
	f.style.visibility = 'visible';
}

function Book(name, author, pages, read){
	this.name =  name;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function(){
		return name+'<br> '+'by <br>'+author;
	}
}

function userData(){
	var name = document.getElementById("form").elements.namedItem('book_name').value;
	var author = document.getElementById("form").elements.namedItem('author').value;
	var pages = document.getElementById("form").elements.namedItem('pages').value;
	var read = document.getElementById("form").elements.namedItem('get').value;


	const newBook = new Book(name, author, pages, read);
	addBooktoLibrary(newBook);
}


function addBooktoLibrary (newBook) {
	myLibrary[index] = newBook;
	index = index+1;
	var bookShelve = document.getElementById('book_shelve');
	bookShelve.innerHTML ="";
	for(var i = 0, length1 = myLibrary.length; i < length1; i++){
		createNewTab(myLibrary[i], i);
	}
}

function createNewTab(bookObject, index){
	
	//creating the outermost book tab
	var book =document.createElement('div');
	book.id = index;
	book.className = 'bookShell';
	document.getElementById('book_shelve').appendChild(book);


	//creating the book read status button
	var read = '<div id = read'+idx+'  class = "notRead" onClick = "isRead()">Hello!</div>'
	book.innerHTML = read;
	
	//creating the book's front cover
	var div= document.createElement('div');
	div.className = 'book_info';
    div.id = 'i'+index;
	document.getElementById(index).insertBefore(div, document.getElementById('read'+index));
	var tab = document.getElementById('i'+index);
	tab.innerHTML = bookObject.info();

}


//function to toggle the read status
function isRead(){
	var read = document.getElementById(event.srcElement.id);

	if(read.className == "notRead"){
		read.className = "Read";
		read.textContent = "Completed";
	}
	else if(read.className == "Read"){
		read.className = "notRead";
		read.textContent = "Due"
	}
}