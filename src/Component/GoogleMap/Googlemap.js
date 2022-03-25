import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './Map.css'
function Map() {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 39.059479, lng: -80.873016 }}>
        </GoogleMap>
    );
};
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function Googlemap(props) {
    return (
        <div className="row maps">
            <div className="">
                <div className="" style={{  height: "70vh" }}>
                    <MapWrapped
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "90%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                    />
                </div>
            </div>
        </div>
    );
}
