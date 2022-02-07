///########Setinterwal method

// var a = 0;
// var id = setInterval(Anim,1000);





// function Anim()
// {   
//     a=a+10;
//     if(a==200)
//     {
//         clearInterval(id);
//     }
//     else{
//         var target = document.getElementById("test");
//         target.style.marginLeft = a + 'px';
//     }
// }


///#########setTimeoutmethod

var id = setTimeout(Anim,3000);

function Anim()
{
    var target = document.getElementById("test");
    target.style.width  =  "500px";
}


function stopAnimation()
{
    clearTimeout(id);
}


