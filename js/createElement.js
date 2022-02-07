///#########createwelementAbd create textNode

// var newElement =  document.createElement("h2");

// var a = document.createTextNode("This is just text");

// var c = document.createComment("this is just a comment");

// console.log(newElement);

// console.log(a);

// console.log(c);


///################append for attaching element


// var newElement = document.createElement("h2");

// var text = document.createTextNode("This is just text");

// var newComment = document.createComment("this is just a comment");

// newElement.appendChild(text);

// document.getElementById("outer").appendChild(newElement);

// document.getElementById("outer").appendChild(newComment);


// console.log(newElement);

// console.log(text);



//###############insetBeforemethod


// var newElement = document.createElement("h2");

// var text = document.createTextNode("This is just text");

// var newComment = document.createComment("this is just a comment");

// newElement.appendChild(text);

// var target = document.getElementById("outer")

// target.insertBefore(newElement,target.childNodes[2])

// document.getElementById("outer").appendChild(newElement);

// document.getElementById("outer").appendChild(newComment);


// console.log(newElement);

// console.log(text);


//#############insertAdjacentElement
//////insert adjacent element method

// var newElement = document.createElement("h2");

// var text = document.createTextNode("This is just text");

// newElement.appendChild(text);

// var target = document.getElementById("outer");

// // target.insertAdjacentElement("beforebegin",newElement);

// target.insertAdjacentElement("afterbegin", newElement);





////###########insertAdjacentHtml method



// var target = document.getElementById("outer");

// var newElement = "<h2> This is a Heading</h2>";

// target.insertAdjacentHTML("afterbegin", newElement);

// target.insertAdjacentHTML("afterend", newElement);

// target.insertAdjacentHTML("beforeend", newElement);



//############insertAdjacentText

// var target = document.getElementById("outer");

// var newText = " This is a text";

// target.insertAdjacentText("afterbegin", newText);



////###############CloneNode method

// var target = document.getElementById("list1").children[0];

// var copyElement = target.cloneNode(true);

// console.log(copyElement);


// document.getElementById("list2").appendChild(copyElement);

// document.getElementById("outer").appendChild(copyElement);



//##### Contains method


// var parentElement  = document.getElementById("outer");

// var target = document.getElementById("abc");

// var find = parentElement.contains(target);


// console.log(find);



///##############hasAttributeMethod


// var target = document.getElementById("outer");

// var find =  target.hasAttribute("class");

// console.log(find);



//########### hasChildNodesmethod


// var target = document.getElementById("outer");

// var find =  target.hasChildNodes();

// console.log(find);



///######isEqualNodeMethod

var target1 = document.getElementById("list1").firstElementChild;


var target2 = document.getElementById("list2").firstElementChild;

var equal = target1.isEqualNode(target2);

console.log(equal);




