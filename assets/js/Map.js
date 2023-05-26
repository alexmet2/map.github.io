var map = L.map('map').setView([37.94296740923939, 23.644866810129752], 17);
	
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19}).addTo(map);
	
	L.Control.geocoder().addTo(map);
	
	L.Routing.control({
		waypoints: [
			L.latLng(37.94296740923939, 23.644866810129752),
		
			L.latLng(37.94546983570866, 23.6468711231226) 
		],
		routeWhileDragging: true,

		geocoder: L.Control.Geocoder.nominatim()
	}).addTo(map);
	
	var pirmark_akmi = L.marker([37.94296740923939, 23.644866810129752],{alt: 'IEK AKMH'}).addTo(map);
	var pirfmark_pinakothiki = L.marker([37.94546983570866, 23.6468711231226],{alt: 'Εθνική Πινακοθήκη Πειραιά'}).addTo(map);
	var pirfmark_nautmouseio = L.marker([37.93304535296362, 23.646166276709884],{alt: 'Ναυτικό Μουσείο Πειραιά'}).addTo(map);
	
//	pirmark_akmi.bindPopup("<b>ΙΕΚ ΑΚΜΗ</b>").openPopup();
//	pirfmark_pinakothiki.bindPopup("<b>Εθνική Πινακοθήκη Πειραιά</b>").popup();
	pirfmark_nautmouseio.bindPopup("<b>Ναυτικό Μουσείο Πειραιά</b>").popup();
	
	function createButton(label, container) {
		var btn = L.DomUtil.create('button', '', container);
		btn.setAttribute('type', 'button');
		btn.innerHTML = label;
		return btn;
}

map.on('click', function(e) {
    var container = L.DomUtil.create('div'),
        startBtn = createButton('Start from this location', container),
        destBtn = createButton('Go to this location', container);

    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
});