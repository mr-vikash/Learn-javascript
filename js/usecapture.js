/*document.querySelector("#inner").addEventListener("click",function()
{
    alert("i am inner div");
})

document.querySelector("#outer").addEventListener("click", function () {
    alert("i am outer div");
})*/



///########### using true false parameter


document.querySelector("#inner").addEventListener("click", function (){
    alert("i am inner div");
},true);

document.querySelector("#outer").addEventListener("click", function (){
    alert("i am outer div");
},ture);

