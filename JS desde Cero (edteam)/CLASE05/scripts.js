// boton que da la hora
function dameLaHora(){
  let botonHora = document.getElementById('boton-hora');

  botonHora.addEventListener('click',function(){
      let fecha = new Date();
      let hora = fecha.getHours();
      let minutos = fecha.getMinutes();
      let segundos = fecha.getSeconds();
    alert(`Son las ${hora} y ${minutos} con ${segundos} segundos`);

  })
}

dameLaHora();

function dameLaTalla(){
  addEventListener('resize',function(){
    let width = innerWidth;
    let height = innerHeight;
    console.log(`El tamaño del viewport es de ${width} x ${height}`);
  })
}

dameLaTalla();


// al parecer no funciona el preventDefault
function blockClick(){  
// añadiendo esto prevengo  
  addEventListener('contextmenu',function(event){
    event.preventDefault();
  });
}

blockClick();


// en este ejemplo si funciona, no se porque.

document.getElementById("myAnchor").addEventListener("click", function(event){
  event.preventDefault()
});



// PROGRAMA DE DIBUJO HTML

function dibujar(){
  let dibujo = function(e){
    let punto = document.createElement('div');
        punto.classList.add('punto');
        punto.style.left = (e.pageX - 10) + "px";
        punto.style.top = (e.pageY - 10) + "px";
        document.body.appendChild(punto);

  };

  window.addEventListener('mousedown',function(){
    addEventListener('mousemove', dibujo);
    addEventListener('mouseup',function(){
      removeEventListener('mousemove', dibujo);
    })
  })
}

dibujar();