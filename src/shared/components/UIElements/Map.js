import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from 'leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import customPinIcon from './../../loc-pin.png';

const Map = ({markerLocation, props}) => {
  /*-- Adding Map using react leaflet Libaray. --*/

    // Create a custom marker icon using the custom image
    const customIcon = L.icon({
        iconUrl: customPinIcon,
        iconSize: [40, 40], // Set the size of the icon
        iconAnchor: [16, 32], // Set the anchor point of the icon
    });

    // here we are using leaflet map library, and just adding cooridnates for specific location that we want to show on map as pin location.
    return (
        <MapContainer className="map"  center={markerLocation} zoom={16}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={markerLocation} icon={customIcon}>
          </Marker>
        </MapContainer>
    );
    
/*-- Below code is for adding map through google map API --*/    
//const Map = props => {

    //const mapRef = useRef();

    // The 'Map constructor' function requires certain parameters to be passed in order to create a map instance. Typically, you need to provide the DOM element where the map should be rendered, as well as other optional configurations like the center coordinates, zoom level etc.

   //const {center, zoom} = props;  // When we need to get properties out of props, then we use object destructing.
    
    // in useEffect hook 1st argument is callback function, and 2nd is dependencies array.
    // useEffect(() => {
    //     const map = new window.google.maps.Map(mapRef.current, {   // the 'new' keyword is used to create a new instance of the 'Map' constructor func.
    //         center: center, // this 2nd ':center' mein jo value pass karain gay from 'PlaceItem.js' woh 1st 'center:' mey stroe hogi
    //         zoom: zoom
    //     });
    
        // here we create a new instance of the 'Marker' class, that represent a 'marker or pin' on the map to indicate specific location.
    //     new window.google.maps.Marker({position:center, map: map });
    // }, [center, zoom]);

    // return <div 
    //         ref={mapRef} 
    //         className={`map ${props.className}`} 
    //         style={props.style}>
    //     </div>;

}

export default Map;