import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1366px',
  height: '625px'
};

const center = {
  lat: -15.98973715145267,
  lng: -48.04470473324397
};

export default function Map() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyDa3iBeFvaccXIS0lAAMZUhRdBl_Mof72Q"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}>
        </GoogleMap>
      </LoadScript>
    )
  }
  