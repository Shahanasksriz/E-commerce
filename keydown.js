var press=document.getElementById("head")
function handleKeydown(event){
    press.textContent="you pressed:"  +event.key
}
document.addEventListener("keydown",handleKeydown)