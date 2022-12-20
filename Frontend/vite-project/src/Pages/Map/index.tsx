import { GoogleMap,useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useEffect ,useContext} from 'react';
import { FgAtlasContexts } from "../../Contexts"

interface room {
  identification:string ,
  level: number,
  latitude:number,
  longitude: number,
  buildingName: string
}

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

export default function Map() {
    const {getSubjectLocalization,subjectPlaceInfo,subjectChoosed} = useContext(FgAtlasContexts);

    const {isLoaded} = useJsApiLoader({
        id:"google-map-script",
        googleMapsApiKey:"AIzaSyDa3iBeFvaccXIS0lAAMZUhRdBl_Mof72Q"
    })

    const center = {
      lat: -15.98973715145267,
      lng: -48.04470473324397
    };


    useEffect(() => {
      getSubjectLocalization(subjectChoosed.id);
    },[]);

    return (
      <div>
          {isLoaded ? (        
          <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={18}>
              <MarkerF position={{lat: subjectPlaceInfo.room[0].latitude, lng: subjectPlaceInfo.room[0].longitude}}/>
          </GoogleMap>
          )          
          :
          (<h1>Carregando</h1>)
          }

      </div>

    )
  }