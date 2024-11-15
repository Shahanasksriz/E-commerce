var a=document.getElementById("head")
 var b=document.getElementById("btn")
 b.addEventListener("click",changecolor)
function changecolor(){
    a.style.color="red"
  }   
  function changeBG(){
     a.style.backgroundColor="yellow"
 }

a.addEventListener("mouseover",changeBG)


// var a=document.getElementsByClassName("hd")
// a[1].addEventListener("click",changecolor)
// function changecolor()
//  {
//     a[0].style.color="blue"
// }

// function changebg()
// {
//     a[0].style.backgroundColor="red"

// }
// a[0].addEventListener("mouseover",changebg)

