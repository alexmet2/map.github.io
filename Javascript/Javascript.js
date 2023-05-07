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

// Adds a circle with a radius of 1000 metres onto the map
function addCircleToMap(map){
    // For Mikrolimano
    map.addObject(new H.map.Circle(
        // The central point of the circle
        {lat:37.93822161530837, lng:23.65899604338134},
        // The radius of the circle in meters
        450,
        {
            style: {
            strokeColor: 'rgba(88, 157, 187, 0.6)', // Color of the perimeter
            lineWidth: 2,
            fillColor: 'rgba(88, 157, 187, 0.7)'  // Color of the circle
            }
        }
        ));

    // For Pasalimani
    map.addObject(new H.map.Circle(
        // The central point of the circle
        {lat:37.93718647121269, lng:23.648230505731238},
        // The radius of the circle in meters
        450,
        {
            style: {
            strokeColor: 'rgba(88, 157, 187, 0.6)', // Color of the perimeter
            lineWidth: 2,
            fillColor: 'rgba(88, 157, 187, 0.7)'  // Color of the circle
            }
        }
        ));

    // For Peiraiki
    map.addObject(new H.map.Circle(
        // The central point of the circle
        {lat:37.93114504671383, lng:23.630859869167328},
        // The radius of the circle in meters
        450,
        {
            style: {
            strokeColor: 'rgba(88, 157, 187, 0.6)', // Color of the perimeter
            lineWidth: 2,
            fillColor: 'rgba(88, 157, 187, 0.7)'  // Color of the circle
            }
        }
    ));

        var group = new H.map.group();

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
    // For MikroLimano
    addMarkerToGroup(group, {lat: 37.93822161530837, lng: 23.65899604338134},
        '<h1>Μικρολίμανο<h1>' +     
        '<div><p style="font-size: 14px;">Το Μικρολίμανο ή Φανάρι ή λιμένας Κουμουνδούρου, πρώην Τουρκολίμανο και στην αρχαιότητα Λιμένας Μουνιχίας, αποτελεί σήμερα τουριστική τοποθεσία και περιλαμβάνεται στην ευρύτερη συνοικία της Καστέλλας. Βρίσκεται στα βορειοανατολικά της Πειραϊκής χερσονήσου συνορεύοντας με την συνοικία του Νέου Φαλήρου. Μόλις μπείτε στην καρδιά του Μικρολίμανου θα σας μαγέψει αυτή η γραφική και άκρως νησιώτικη εικόνα με τα σπίτια αμφιθεατρικά κτισμένα στο λόφο, ενώ δίπλα σας θα βλέπετε αγκυροβολημένα κότερα και μικρά καΐκια.Τα δεκάδες μαγαζάκια που λειτουργούν κατά μήκος της παραλίας ολοκληρώνουν αυτή την εικόνα και αίσθηση νησιού.Tο φαγητό στο Μικρολίμανο φαίνεται πως τα τελευταία χρόνια έχει ανοίξει τους ορίζοντες του και είναι σε ετοιμότητα για να σας ταξιδέψει first-class στις κουζίνες του κόσμου, με διαβατήριο τα πιο γευστικά, αμιγώς επηρεασμένα ή απλώς πειραγμένα από τις διεθνείς κουζίνες, μενού. Απολαμβάνοντας τη θέα και το θαλασσινό αεράκι, είτε επιλέξετε τις παραδοσιακές γεύσεις είτε πιο fusion πρότασεις,ένα είναι βέβαιο: το σημερινό σας γεύμα θα σας ανταμείψει!</p></div>');
    // For Marina Zeas
    addMarkerToGroup(group, {lat:37.93718647121269, lng:23.648230505731238},
        '<h1>Μαρίνα Ζέας<h1>' +     
        '<div><p style="font-size: 14px;">Η Μαρίνα Ζέας βρίσκεται στον Πειραιά, στην ανατολική ακτή της χερσονήσου της Πειραϊκής. Η περιοχή της θάλασσας αποτελείται από δύο λιμάνια, το Πασσαλιμάνι και τη Φρεατίδα. Σε σχέση με άλλες μαρίνες, η κίνηση εδώ είναι πιο αυξημένη χάρη στα πολλά καταστήματα μέσα στη μαρίνα και τον γύρω χώρο. Η Μαρίνα Ζέας είναι ένα σημείο στον Πειραιά ιδανικό για περπάτημα, καθώς στην διαδρομή σας απολαμβάνετε την θέα της θάλασσας, του ουρανού και των κότερων. Ωστόσο, εκτός από ιδανικό μέρος για περπάτημα,είναι ιδανικό μέρος για φαγητό και ποτό καθώς διαθέτει πολύ ενδιαφέροντα μαγαζιά και διεθνείς κουζίνες για όλα τα γούστα, όπως Ιταλικό, Μεξικάνικο, Ασιάτικο,Αμερικανικό και άλλα πολλά.</p></div>');
    // For Peiraiki
    addMarkerToGroup(group, {lat:37.93114504671383, lng:23.630859869167328},
        '<h1>Πειραϊκή<h1>' +     
        '<div><p style="font-size: 14px;">Η Πειραϊκή αποτελεί την Νοτιοδυτική παραλιακή συνοικία του Πειραιά, βρίσκεται ανατολικά του κεντρικού λιμανιού του Πειραιά. Κατά μήκος της παραλίας της Πειραϊκής βρίσκονται τα αρχαία Μακρά Τείχη (τείχη του Κόνωνα) και το λιμάνι της. Συνορεύει στα βόρεια με την Καλλίπολη, στα ανατολικά με τον Άγιο Βασίλειο, στα δυτικά και νότια βρέχεται σε ένα τεράστιο μήκος από τον Σαρωνικό κόλπο δημιουργώντας την Πειραϊκή ακτή επί της Ακτής Θεμιστοκλέους. Κι αν ο Πειραιάς έχει να σας παρουσιάσει άπειρες επιλογές σε ψαροταβέρνες, κουτούκια, fancy εστιατόρια και πιο fast-food φιλοσοφίας στέκια, η Πειραϊκή ειδικεύεται στις “ταβερνοκαταστάσεις”.Κατά μήκος της θα βρείτε ουζερί,μεζεδοπωλεία,μπακαλοταβέρνες και ψαροταβέρνες, τα οποία έχουν χαραγμένη πάνω τους μια στάμπα αυθεντικότητας του παλιού Πειραιά, τότε που όλα ήταν λίγο πιο αγνά και πολύ πιο νόστιμα.</p></div>');    
}



function calculateRouteFromAtoB (platform) {
    var router = platform.getRoutingService(null, 8),
        routeRequestParams = {
          routingMode: 'fast',
          transportMode: 'pedestrian',
          origin: '37.9372346656281,23.64408321128575', // St Paul's Cathedral
          destination: '37.95612919419751,23.671305970355366',  // Tate Modern
          return: 'polyline,turnByTurnActions,actions,instructions,travelSummary'
        };
    router.calculateRoute(
      routeRequestParams,
      onSuccess,
      onError
    );
}

function onSuccess(result) {
    var route = result.routes[0];
   /*
    * The styling of the route response on the map is entirely under the developer's control.
    * A representitive styling can be found the full JS + HTML code of this example
    * in the functions below:
    */
    addRouteShapeToMap(route);
    addManueversToMap(route);
    addManueversToPanel(route);
    addSummaryToPanel(route);
    // ... etc.
}

function onError(error) {
    alert('Can\'t reach the remote server');
}

var mapContainer = document.getElementById('mapContainer'),
  routeInstructionsContainer = document.getElementById('panel');

// Hold a reference to any infobubble opened
var bubble;

/**
 * Opens/Closes a infobubble
 * @param  {H.geo.Point} position     The location on the map.
 * @param  {String} text              The contents of the infobubble.
 */
function openBubble(position, text){
 if(!bubble){
    bubble =  new H.ui.InfoBubble(
      position,
      // The FO property holds the province name.
      {content: text});
    ui.addBubble(bubble);
  } else {
    bubble.setPosition(position);
    bubble.setContent(text);
    bubble.open();
  }
}

function addRouteShapeToMap(route){
    route.sections.forEach((section) => {
      // decode LineString from the flexible polyline
      let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
  
      // Create a polyline to display the route:
      let polyline = new H.map.Polyline(linestring, {
        style: {
          lineWidth: 4,
          strokeColor: 'rgba(0, 128, 255, 0.7)'
        }
      });
  
      // Add the polyline to the map
      map.addObject(polyline);
      // And zoom to its bounding rectangle
      map.getViewModel().setLookAtData({
        bounds: polyline.getBoundingBox()
      });
    });
  }

  function addManueversToMap(route){
    var svgMarkup = '<svg width="18" height="18" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="8" cy="8" r="8" ' +
        'fill="#1b468d" stroke="white" stroke-width="1"  />' +
      '</svg>',
      dotIcon = new H.map.Icon(svgMarkup, {anchor: {x:8, y:8}}),
      group = new  H.map.Group(),
      i,
      j;
    route.sections.forEach((section) => {
      let poly = H.geo.LineString.fromFlexiblePolyline(section.polyline).getLatLngAltArray();
  
      let actions = section.actions;
      // Add a marker for each maneuver
      for (i = 0;  i < actions.length; i += 1) {
        let action = actions[i];
        var marker =  new H.map.Marker({
          lat: poly[action.offset * 3],
          lng: poly[action.offset * 3 + 1]},
          {icon: dotIcon});
        marker.instruction = action.instruction;
        group.addObject(marker);
      }
  
      group.addEventListener('tap', function (evt) {
        map.setCenter(evt.target.getGeometry());
        openBubble(
           evt.target.getGeometry(), evt.target.instruction);
      }, false);
  
      // Add the maneuvers group to the map
      map.addObject(group);
    });
  }

  function addSummaryToPanel(route){
    let duration = 0,
        distance = 0;
  
    route.sections.forEach((section) => {
      distance += section.travelSummary.length;
      duration += section.travelSummary.duration;
    });
  
    var summaryDiv = document.createElement('div'),
     content = '';
     content += '<b>Total distance</b>: ' + distance  + 'm. <br/>';
     content += '<b>Travel Time</b>: ' + duration.toMMSS();
  
  
    summaryDiv.style.fontSize = 'small';
    summaryDiv.style.marginLeft ='5%';
    summaryDiv.style.marginRight ='5%';
    summaryDiv.innerHTML = content;
    routeInstructionsContainer.appendChild(summaryDiv);
  }

  function addManueversToPanel(route){
    var nodeOL = document.createElement('ol');
  
    nodeOL.style.fontSize = 'small';
    nodeOL.style.marginLeft ='5%';
    nodeOL.style.marginRight ='5%';
    nodeOL.className = 'directions';
  
    route.sections.forEach((section) => {
      section.actions.forEach((action, idx) => {
        var li = document.createElement('li'),
            spanArrow = document.createElement('span'),
            spanInstruction = document.createElement('span');
  
        spanArrow.className = 'arrow ' + (action.direction || '') + action.action;
        spanInstruction.innerHTML = section.actions[idx].instruction;
        li.appendChild(spanArrow);
        li.appendChild(spanInstruction);
  
        nodeOL.appendChild(li);
      });
    });
  
    routeInstructionsContainer.appendChild(nodeOL);
  }
  
  
  Number.prototype.toMMSS = function () {
    return  Math.floor(this / 60)  +' minutes '+ (this % 60)  + ' seconds.';
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
addCircleToMap(map);
calculateRouteFromAtoB(platform);