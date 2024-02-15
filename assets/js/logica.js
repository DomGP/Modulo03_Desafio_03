let color = document.getElementById('key')
let kay = document.getElementById('kay')

document.addEventListener('keydown', (e) =>{
    if(e.key === 'a' || e.key === 'A'){
        color.style.backgroundColor='pink'
    }else if (e.key ==='s' || e.key ==='S'){
        color.style.backgroundColor='orange'
    }else if (e.key === 'd' || e.key ==='D'){
        color.style.backgroundColor='lightblue'
    }
})


document.addEventListener('keydown', (e) =>{
    let contenedor = document.createElement('div')
    contenedor.style.width='200px';
    contenedor.style.height='200px'
    if(e.key === 'q' || e.key === 'Q'){
        contenedor.style.backgroundColor='purple'
    }else if (e.key ==='w' || e.key ==='W'){
        contenedor.style.backgroundColor='grey'
    }else if (e.key === 'e' || e.key ==='E'){
        contenedor.style.backgroundColor='brown'
    }else{
        return;
    }

    kay.appendChild(contenedor)
})


//Funcion para botones
let btnVolver = document.querySelector('#btn-volver')
btnVolver.addEventListener('click', function(){
    window.location.href = '4_colores.html'
})