import { GoogleMap, Marker, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};


export default function Map() {
    const {isLoaded} = useJsApiLoader({
        id:"google-map-script",
        googleMapsApiKey:"AIzaSyDa3iBeFvaccXIS0lAAMZUhRdBl_Mof72Q"
    })

    const center = {
      lat: -15.98973715145267,
      lng: -48.04470473324397
    };

    const position = {
        lat: -15.98973715145267,
        lng: -48.04470473324397
    }

    return (
      <div>
          {isLoaded ? (        
          <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={18}>
            <MarkerF position={{lat: position.lat, lng: position.lng}} label="sua sala" />
          </GoogleMap>
          )          
          :
          (<h1>Carregando</h1>)
          }

      </div>

    )
  }