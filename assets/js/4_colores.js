let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');

div1.addEventListener('click', function(){
    div1.style.backgroundColor= 'black'
});

div2.addEventListener('click', function(){
    cambiaColor(div2)
});

div3.addEventListener('click', function(){
    cambiaColor(div3)
});

div4.addEventListener('click', function(){
    cambiaColor(div4)
});

function cambiaColor(elemento){
    elemento.style.backgroundColor = 'black';
}


//Funciones para los botones
let btnVolver = document.querySelector('#btn-volver')
let btnSiguiente = document.querySelector('#btn-siguiente')

btnVolver.addEventListener('click', function(){
    window.location.href = '3_pintar.html'
})

btnSiguiente.addEventListener('click', function(){
    window.location.href = '5_cuadrados.html'
})
