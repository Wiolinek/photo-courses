import GoogleMapReact from 'google-map-react';

import '../styles/map.css';


const Map = ( { lat, lng } ) => {

    let Label = () => <svg className="map-marker" id="i-location" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34" height="34" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <circle cx="16" cy="11" r="4" /><path d="M24 15 C21 22 16 30 16 30 16 30 11 22 8 15 5 8 10 2 16 2 22 2 27 8 24 15 Z" /></svg>;

    const defaultProps = {
        center: {
          lat: lat,
          lng: lng,
        },
        zoom: 11
    };  

      
    return (
        <div style={{ height: "100%", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            <Label
                lat={lat}
                lng={lng}
            />
            </GoogleMapReact>
      </div>
    )
}

export default Map;