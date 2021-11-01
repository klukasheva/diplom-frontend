import * as React from 'react'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

export const MapWithMarker = withScriptjs(withGoogleMap(()=>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 52.423138, lng: 30.9981773 }}
    >
        <Marker
            position={{ lat: 52.423138, lng: 30.9981773 }}
        />
    </GoogleMap>
))