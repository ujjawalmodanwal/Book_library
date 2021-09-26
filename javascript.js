let myLibrary = [];
let idx = 0;


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
	myLibrary[idx] = newBook;
	idx = idx+1;
	var bs = document.getElementById('book_shelve');
	bs.innerHTML ="";
	for(var i = 0, length1 = myLibrary.length; i < length1; i++){
		newTab(myLibrary[i], i);
	}
}

function newTab(bookObject, idx){
	console.log(bookObject.name);
	var book =document.createElement('div');
	book.id = idx;
	book.className = 'bookShell';
	document.getElementById('book_shelve').appendChild(book);
	var read = '<div id = read'+idx+'  class = "readStatus" onClick = "isRead()">Hello!</div>'
	book.innerHTML = read;
	var div= document.createElement('div');
	div.className = 'book_info';
    div.id = 'i'+idx;
	document.getElementById(idx).insertBefore(div, document.getElementById('read'+idx));
	var tab = document.getElementById('i'+idx);
	tab.innerHTML = bookObject.info();

	///var read = document.createElement('div');
	///read.className = 'readStatus';
	//read.id = 'read'+idx;
	///read.textContent = 'Hello';
	//read.onclick = function(){isRead(this.id)};
}


function isRead(){
	var read = document.getElementById(event.srcElement.id);
	var  color=window.getComputedStyle(read).backgroundColor ;
	console.log(color);
	if(color  == 'r'){
		read.style.backgroundColor = 'green';
		read.innerHTML = 'Completed';
	}
	else if(color == 'g'){
		read.style.backgroundColor = 'red';
		read.innerHTML = 'Due';
	}
}