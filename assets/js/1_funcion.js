//Declaración de Función

/* function example(a, b, c){
    return a+b+c
} */

//Expresión de Función
const example = function(a,b,c){
    return a+b+c
}
let resultado = example(4,5,2)
console.log(resultado)



//Función para cambair de pagina
let button = document.getElementById('btn-1')
button.addEventListener('click', function(){
    window.location.href = '3_pintar.html'
})
