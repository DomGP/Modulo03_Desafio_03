//2.2 Se modifica la función según la pauta entregada y al hacer click, cambia a amarillo

let elemento = document.getElementById('ele')

elemento.addEventListener('click', ()=> elemento.style.backgroundColor = 'yellow')


//2.3 Se modifica el codigo anterior, donde se pasa un color al hacer click, pero tiene color verde por defecto

let element = document.getElementById('ele1')

function pintar(ele, color='green'){
    ele.style.backgroundColor=color
}
pintar(element)

element.addEventListener('click', ()=> pintar(element, 'yellow'))




//Funcion para cambiar de paginas
let btnVolver = document.querySelector('#btn-volver')
let btnSiguiente = document.querySelector('#btn-siguiente')

btnVolver.addEventListener('click', function(){
    window.location.href = 'index.html'
})

btnSiguiente.addEventListener('click', function(){
    window.location.href = '4_colores.html'
})