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

