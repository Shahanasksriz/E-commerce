// var a=document.getElementById("h")
//  function handleKeydown(event)
// {     a.textContent="you pressed key" +event.key
// }
// document.addEventListener("keydown",handleKeydown)


 var a=document.getElementById("h")
 var b=document.getElementById("c")


function changecolor()
{
   a.style.color="red"

 }
b.addEventListener("click",changecolor)
function changeb()
{
    a.style.backgroundColor="yellow"
}
a.addEventListener("mouseover",changeb)



var c=document.getElementById("hd")
function handlekeydown(event)

{
    c.textContent="press any key here is:  "  +event.key

}
document.addEventListener("keydown",handlekeydown)




