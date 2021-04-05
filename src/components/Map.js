import GoogleMapReact from 'google-map-react';

const Map = () => {

    let Test = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };  

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            <Test
                lat={59.955413}
                lng={30.337844}
                text="photo passion"
            />
            </GoogleMapReact>
      </div>
    )
}

export default Map;