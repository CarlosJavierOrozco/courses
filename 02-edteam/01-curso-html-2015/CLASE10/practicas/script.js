//console.log(navigator.geolocation.getCurrentPosition());

var boton = document.getElementById('boton');
boton.addEventListener('click',get);


function get(){
	navigator.geolocation.getCurrentPosition(getPosition);
}

function getPosition(position){

	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var element = document.getElementById('map');
	var opt  = {
		center: {
			lat: lat,
			lng: lon
		},
		zoom: 20,
		mapTypeId: google.maps.MapTypeId.SATELLITE // ROADMAP
	}

	// creamos el mapa
	var map = new google.maps.Map(element,opt);

	// creamos el marcador

	var mark = new google.maps.Marker({
		position: opt.center,
		map : map,
		tittle: "Estas AQUI!"
	});
};