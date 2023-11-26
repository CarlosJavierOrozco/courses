/*
El objeto navigator contiene al objeto geolocation el cual posee tres métodos:
    1. getCurrentPosition()  
        // Tu posicion actual
    2. watchPosition()       
        // Tu posicion mientras te mueves
    3. clearWatch()
        // Detiene el watchPosition()

Vamos a usar en esta clase solo el primero.

Requiere al menos un parámetro (el de éxito)

navigator.geolocation.getCurrentPosition(exito,error)

La funcion exito se ejecuta si el navegador consigue obtener la localizacion. Y la función error en el caso contrario.

*/

var boton = document.getElementById('boton');
boton.addEventListener('click',obtenerPosicion);

function obtenerPosicion(){
    navigator
        .geolocation
        .getCurrentPosition(mostrarPosicion);
}

function mostrarPosicion(position){
    var lat = position.coords.latitude;
    var longi = position.coords.longitude;
    var elemento = document.getElementById('mapa');
    var opciones = {
        center: {
            lat: lat,
            lng: longi
        },
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.SATELLITE // ROADMAP
    }
    var map = new google.maps.Map(elemento,opciones);
    var mark = new google.maps.Marker({
        position: opciones.center,
        map: map,
        title: 'Estas aqui'
    });
}