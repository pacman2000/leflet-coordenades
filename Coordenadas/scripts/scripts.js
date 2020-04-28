let mymap = L.map("map").setView([41.386939, 2.170068], 13);
	//L => libreria Leaflet
	//map() => metodo que va a iniciliazar
	//setView() => metodo para asignar las coordenadas []
	//13 => zoom inicial
		//Plaza cataluña. Latitud: 41.3870154 Longitud: 2.1700471 Elevación: 18.38 metros

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(mymap);
	//L.tileLayer => añade un tapiz
	//addTo() => metodo que añade el tapiz a nuestro div	

//para añadir marcadores
let marker = L.marker([41.3868561, 2.1661102]).addTo(mymap);
	//L.marker => metodo que añade un marcador
		//Calle Balmes 16: Latitud: 41.3868561 Longitud: 2.1661102

//para añadir popup al marcador
marker.bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurante mediterráneo <br>Carrer Balmes 16, 08007-Barcelona").openPopup();

//pop up que indica las coordenadas del lugar al que clicamos
let coordenadaPopup = L.popup();
function onMapClick(e) {
    coordenadaPopup
        .setLatLng(e.latlng)
        .setContent("Mis coordenadas son " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on("click", onMapClick);	
