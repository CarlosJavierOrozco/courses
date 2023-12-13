function validarDatos(){
  var verificar=true;
  if (!document.envia_get_frm.nombre.value) {
    alert("El campo nombre es requerido");
    document.envia_get_frm.nombre.focus();
    verificar=false;
  }else if (!document.envia_get_frm.password.value) {
    alert("El campo password es requerido");
    document.envia_get_frm.password.focus();
    verificar=false;
  }else if(!document.envia_get_frm.sexo[0].checked && !document.envia_get_frm.sexo[1].checked){
    alert("El campo sexo es requerido");
    document.envia_get_frm.sexo[0].focus();
    verificar=false;
  }

  if (verificar) {
    document.envia_get_frm.submit();
  }

}

function validarDatosPost(){
  var verificar=true;  
  if (!document.envia_post_frm.nombre.value) {
    alert("El campo nombre es requerido");
    document.envia_post_frm.nombre.focus();
    verificar=false;
  }else if (!document.envia_post_frm.password.value) {
    alert("El campo password es requerido");
    document.envia_post_frm.password.focus();
    verificar=false;
  }else if(!document.envia_post_frm.sexo[0].checked && !document.envia_post_frm.sexo[1].checked){
    alert("El campo sexo es requerido");
    document.envia_post_frm.sexo[0].focus();
    verificar=false;
  }

  if (verificar) {
    document.envia_post_frm.submit();
  }

}

window.onload = function(){
  document.getElementById("get_btn").onclick = validarDatos;
  document.getElementById("post_btn").onclick = validarDatosPost;
}

