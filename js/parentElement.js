//  var a =  document.getElementById("inner").parentElement;

//  console.log(a);


/////#####################parentElement

// var a = document.getElementById("child-c").parentElement.style.background = "green";

// console.log(a);



///childrenElement

// var a = document.getElementById("inner").children[1].style.background = 'gold';

// console.log(a);



///Firstchild firstElement


// var a = document.getElementById("inner").firstElementChild;

// var a = document.getElementById("inner").firstElementChild.innerHTML;

// var a = document.getElementById("inner").firstElementChild.style.background = "purple";

// console.log(a);



////#############lastElementchild

// var a = document.getElementById("inner").lastElementChild.style.background = "black";

// console.log(a);



////################next and previousSibling

// var a = document.getElementById("child-c").nextElementSibling.style.background = "black";

// console.log(a);


//###############for previous sibling

// var a = document.getElementById("child-c").previousElementSibling.style.background = "black";

// console.log(a);



///##########replaceChild & 


// var newElement = document.createElement("li");

// var newText = document.createTextNode("this is new text");

// newElement.appendChild(newText);

// var target = document.getElementById("list");

// var oldElement = target.children[0];

// // console.log(oldElement);

// target.replaceChild(newElement,oldElement);


///##########removeChild Method


// var target = document.getElementById("list");

// var oldElement = target.children[0];

// target.removeChild(oldElement);



////###############CloneNode method

var target = document.getElementById("list1").children[0];

var copyElement = target.cloneNode();

console.log(copyElement);














