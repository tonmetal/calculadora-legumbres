let input = document.getElementById("input")
let boton = document.getElementById("boton")

input.addEventListener("input", function(){
    if(input.value > 2000 && input.value < 3000){
    let resultado =  ((input.value - 1450)/ 2 + 1450)
    boton.textContent = resultado 
    }
})