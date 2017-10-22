/*	TRYING OUT FROM OPENLAYER WORKSHOP - http://openlayers.org/workshop/en/ 	*/


/*
  A Map in Openlayers in made of        :       "layers"
					:	"view" 		-	to visualize "layers"
					:	"interactions"	-	to modify content
					:	"controls"	-	with UI Components
*/

var OLmap = new ol.Map( {
    target: 'omap',
    layers: [
	// Instantiate a Layer Source
	new ol.layer.Tile({
	    // Map Source for the layer
	    source: new ol.source.OSM()
	})
    ],
    view: new ol.View({
	// Map View
	center: ol.proj.fromLonLat([0.00, 0.00]),
	zoom: 4
    })
});


// Instantiate a SOURCE for position [DATA SOURCE]
// two sources are possible : VECTOR, RASTER
const v_Position = new ol.source.Vector(); 

// Instantiate a LAYER to put the VECTOR SOURCE(S)
// two layers are possible : VECTOR, RASTER
const vLayer  = new ol.layer.Vector({  
    source: v_Position
});
    
vLayer.setStyle(new ol.style.Style({
    image: new ol.style.Icon({
	src: '../../assets/markers/maki-icons/triangle-15.svg'
    })
})
);


// ADD the instantiated LAYER to the MAP
OLmap.addLayer(vLayer);


// Default CRS	: Web Mercator - Coordinate Reference System
//		: EPSG 3857
navigator.geolocation.getCurrentPosition(function(pos) {
    
    // getting latitude and longitude for current position
    const coords = ol.proj.fromLonLat([pos.coords.longitude, pos.coords.latitude]); 
    OLmap.getView().animate({center: coords, zoom: 5});
    
    // ADD a feature 
    v_Position.addFeature(new ol.Feature(new ol.geom.Point(coords)));
});
