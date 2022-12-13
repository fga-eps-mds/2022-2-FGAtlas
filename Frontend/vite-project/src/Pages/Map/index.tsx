import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '1366px',
  height: '625px'
};

const center = {
  lat: -15.98973715145267,
  lng: -48.04470473324397
};

export default function Map() {
    const {isLoaded} =useJsApiLoader({
        id:"google-map-script",
        googleMapsApiKey:"AIzaSyDa3iBeFvaccXIS0lAAMZUhRdBl_Mof72Q"
    })
    const position = {
        lat: -15.98973715145267,
        lng: -48.04470473324397
    }
    return (<div>
        {isLoaded?(        
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}>

        <Marker position={position}>Sua sala</Marker>


        </GoogleMap>):
        (<h1>Carregando</h1>)
        }

    </div>

    )
  }