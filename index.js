let input = document.getElementById("input")
let boton = document.getElementById("boton")

boton.addEventListener("click", function(){
    if(input.value > 2000 && input.value < 3000){
    input.value = ((input.value - 1450)/ 2 + 1450)
    }
})