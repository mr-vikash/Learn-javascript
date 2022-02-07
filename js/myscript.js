// var element;
//targetElements


/*element =  document.all[8];

element = document.head;

element = document.title;

element = document.body;

element = document.links;

element = document.links[0];

element = document.images;

element = document.images[1];

element = document.forms;

element = document.doctype;

element = document.URL;

element = document.domain;

element = document.baseURI;

element = document.getElementById('navbar');

element = document.getElementsByClassName("container");

element = document.getElementsByClassName("links")[0];

element = document.getElementsByClassName("list")[1];

element = document.getElementsByTagName("ul");

element = document.getElementsByTagName("ul")[1];


element = document.getElementById("header").innerText;

element = document.getElementById("header").innerHTML;

element = document.getElementById("header").getAttribute("id");

element = document.getElementById("header").getAttribute("style");

element = document.getElementById("header").getAttribute("onClick");

element = document.getElementById("header").getAttributeNode("onClick");

element = document.getElementById("header").getAttributeNode("onClick").value;

element = document.getElementById("header").attributes;

element = document.getElementById("header").attributes[1];
*/




///////set and get values



/*element = document.getElementById("header").attributes[3].value;

element = document.getElementById("header").attributes[1].name;

document.getElementById("header").innerText  = "Ankur Gupta"

element = document.getElementById("header").innerText

element = document.getElementById("header").innerHTML

console.log(element);

document.getElementById("header").innerHTML = "<h1>Ankur Gupta</h1>"

// document.getElementById("header").setAttribute("class","pqr")


// element = document.getElementById("header").getAttribute("class");

// document.getElementById("header").setAttribute("class","pqr")


// element = document.getElementById("header").getAttribute("class");

// document.getElementById("header").setAttribute("style","border:5px solid blue");

document.getElementById("header").attributes[3].value = style="border: 5px solid black";

element = document.getElementById("header").removeAttribute("style");

element = document.getElementById("header").getAttribute("class");

console.log(element);*/



//Query Selector

// document.querySelector("#header").innerHTML = "<h1>Ankur Gupta</h1>";

// element = document.querySelector("#header").getAttribute("class");

// console.log(element);


//document.querySelector(".list").innerHTML = "<h1>Ankur Gupta</h1>";

// element = document.querySelector(".list")

//element = document.getElementsByClassName("list");
//console.log(element);



//querySelectorAll




// document.querySelector("#header").innerHTML = "<h1>Ankur Gupta</h1>";

// element = document.querySelectorAll(".list")

// element = document.querySelectorAll(".list")[1].innerHTML;

//element = document.querySelectorAll("ul")

//element = document.querySelectorAll("ul")[1].innerHTML;

// element = document.querySelectorAll("#header");

// element = document.querySelectorAll("#header h1")[0].innerHTML;

// console.log(element);


/////#############################DOM css styling methods

/*document.querySelector("#header").style.backgroundColor = "tan";

document.querySelector("#header").style.color = "blue";

element = document.querySelector("#header").style.border;

element = document.querySelector("#header").style.color;*/


/*document.querySelector("#header").className = "abc wxy";

element = document.querySelector("#header").style.className;*/

//#################################DOM classlist method

// document.querySelector("#header").classList = "abc wxy";

// element = document.querySelector("#header").classList;

// document.querySelector("#header").classList.add("lmn","efg");

// document.querySelector("#header").classList.remove("lmn");

// element = document.querySelector("#header").classList;

// console.log(element);




///#########################################addd event listener

// document.getElementById("header").onclick = abc;


// document.getElementById("header").onmouseenter = abc;


// document.getElementById("header").addEventListener("click",abc);

// document.getElementById("header").addEventListener("mouseenter", abc);

// document.getElementById("header").addEventListener("click", function()
// {
//     document.getElementById("header").style.border = "10px solid gold";
// });


///#################### for calling same two  function   at a time 

// document.getElementById("header").addEventListener("click", abc);

// document.getElementById("header").addEventListener("click", function () {
//     document.getElementById("header").style.border = "10px solid gold";
// });




///################### using remove event listener method

// document.getElementById("header").addEventListener("mouseleave",abc);

// document.getElementById("header").addEventListener("click", xyz);






// function abc()
// {
//     document.getElementById("header").style.background = "cyan";
// }


// function xyz()
// {
//     document.getElementById("header").removeEventListener("mouseleave", abc);
// }



////#####################using classListMethodsd

// var element;



// document.getElementById("header").addEventListener("click",abc);







// function abc(){
//     document.getElementById("header").classList.add("wxy") ;

//     var a = document.getElementById("header").classList;

//     console.log(a);
// }



///3########### using toggle method

var element;



document.getElementById("header").addEventListener("click", abc);







function abc() {
    // document.getElementById("header").classList.toggle("wxy");

    // document.getElementById("header").classList.item(1);

      var a = document.getElementById("header").classList.contains("first");

      console.log(a);
}


// function xyz() {
//     document.getElementById("header").removeEventListener("mouseleave", abc);
// }








