//add elements such as tags to html document

let div = document.createElement('div');

div.innerHTML = '<p>welcome to GreatSack</p>';

div.className = 'title';

console.log(div);

let menu = document.getElementById("menu");

let list = document.createElement("li");

list.innerHTML = "contact";

menu.appendChild(list);

//adding text to html document

let mojo = document.getElementById("mojo");

menu.innerHTML = "<h1>Hello!</h1>";