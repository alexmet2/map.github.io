//Initialize the Platform object:
var platform = new H.service.Platform({
    'apikey': 'vUniQyElJmhNStZ99Bf6qwfoC93Tja4u3ccWPShdeOY'
});

// Get the default map types from the Platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        zoom: 13,
        center: { lng: 23.6375, lat: 37.9497 },
        pixelRatio: window.devicePixelRatio || 1
    }
);        

window.addEventListener('resize', function () {
    map.getViewPort().resize(); 
});    

// Enable the event system on the map instance:
var mapEvents = new H.mapevents.MapEvents(map);

// Add event listeners:
map.addEventListener('tap', function(evt) {
    // Log 'tap' and 'mouse' events:
    console.log(evt.type, evt.currentPointer.type);
});

// Instantiate the default behavior, providing the mapEvents object:
var behavior = new H.mapevents.Behavior(mapEvents);

// Used in addInfoBubble function for adding properties in the InfoBubbles
function addMarkerToGroup(group, coordinate, html) {
    var marker = new H.map.Marker(coordinate);
    // add custom data to the marker
    marker.setData(html);
    group.addObject(marker);
}

// Adds EventListeners for the InfoBubbles
function addInfoBubble(map) {
    var group = new H.map.Group();

    map.addObject(group);

    // add 'tap' event listener, that opens info bubble, to the group
    group.addEventListener('tap', function (evt) {
        // event target is the marker itself, group is a parent event target
        // for all objects that it contains
        var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
        // read custom data
        content: evt.target.getData()
        });
        // show info bubble
        ui.addBubble(bubble);
    }, false);

    addMarkerToGroup(group, {lat: 37.9497, lng: 23.6375},
    '<div><a href="https://www.mcfc.co.uk">Manchester City</a></div>' +
    '<div>City of Manchester Stadium<br />Capacity: 55,097</div>');

}

// Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers);

var mapSettings = ui.getControl('mapsettings');
var zoom = ui.getControl('zoom');
var scalebar = ui.getControl('scalebar');

mapSettings.setAlignment('bottom-left');
zoom.setAlignment('top-left');
scalebar.setAlignment('bottom-left');

// Runs a function
addInfoBubble(map);