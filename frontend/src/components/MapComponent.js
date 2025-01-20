import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapComponent = ({ address }) => {
    const [position, setPosition] = useState([51.505, -0.09]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (address) {
            setLoading(true);
            axios
                .get(
                    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
                        address
                    )}&key=8f741c7ce35544609646455395ac00a9`
                )
                .then((response) => {
                    if (response.data.results.length > 0) {
                        const { lat, lng } = response.data.results[0].geometry;
                        setPosition([lat, lng]);
                    } else {
                        console.error('No results found for the address:', address);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching geocoding data:', error);
                    setLoading(false);
                });
        }
    }, [address]);

    if (loading) {
        return <div>Loading map...</div>;
    }

    return (
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>{address}</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
