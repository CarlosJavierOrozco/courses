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


function jugar(){
  addEventListener('keydown',function(e){
    if (e.ctrlKey === true && e.altKey === true && e.which === 89) {
      alert('Bienvenido al Juego');
    }
  })
}

jugar();



function keylog(){

  let keylogInput = document.getElementById('keylogger');
  let keylog

  // aunque se puede usar keylog creo que mejor es usar change en este programa.
  keylogInput.addEventListener('change',function(){
    keylog = this.value
    console.log(keylog);
  })
}

keylog();


function checked(){

  let ckeck = document.getElementById('ckeck');

  check.addEventListener('change',function(e){
    if (e.target.checked) {
      alert("Gracias, prometo cero span :)")
    }else{
      alert("Lamento que sea asi :(")
    }
  })

}

checked();