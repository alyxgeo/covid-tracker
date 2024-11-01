import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';

// Set marker icon options
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const CovidMap = ({ data }) => {
    // Ensure data is available and only render if a state is selected
    if (!data.length || !data[0].lat || !data[0].long) return <p>No data available for the selected state.</p>;

    const { state, active, recovered, deaths, lat, long } = data[0];

    return (
        <div className='map'>
        <MapContainer center={[lat, long]} zoom={6} style={{ height: '100%', width: '100%'}}  key={state}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[lat, long]}>
                <Popup>
                    <h3>{state}</h3>
                    <p>Active Cases: {active}</p>
                    <p>Recovered: {recovered}</p>
                    <p>Deaths: {deaths}</p>
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    );
};

export default CovidMap;
