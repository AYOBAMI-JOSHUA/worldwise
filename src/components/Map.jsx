import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet';
import { useCities } from "../context/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import User from "./User";


function Map() {
    const {cities} = useCities();
    const [mapPosition, setMapPosition] = useState([40, 0]);
    
    const {isLoading: isLoadingPosition, position: geolocationPosition, error: geoError, getPosition} = useGeolocation();
    const [ lat, lng ] = useUrlPosition();

    useEffect(
        function () {
            if (lat && lng) setMapPosition([lat, lng]);
        },
        [lat, lng]
    );

    useEffect(
        function () {
            if (geolocationPosition)
                setMapPosition([geolocationPosition.lat, geolocationPosition.lng]) 
        },
        [geolocationPosition]
    )

    

    return (
        <div className="relative h-full" >

            <div className="absolute top-4 right-4 z-[1000]">
                <User />
            </div>
            
            <div className="h-full">
                <MapContainer center={mapPosition}  zoom={4} scrollWheelZoom={true} className="w-full h-full">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {cities.map((city) => (
                        <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
                            <Popup>
                            <span>{city.emoji}</span><span>{city.cityName}</span>
                            </Popup>
                        </Marker>
                    ))}

                    <ChangeCenter position={mapPosition} />
                    <DetectClick/>
                </MapContainer>
            </div>
            

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[1000]">
                {!geolocationPosition && (
                    <button onClick={getPosition} disabled={isLoadingPosition} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition-all disabled:opacity-50 flex items-center gap-2" >
                        {isLoadingPosition ? (
                            <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Locating...
                            </>
                        ) : (
                            <>
                            <span className="text-lg">📍</span>
                            My Location
                            </>
                        )}
                    </button>
                )}
            
                {geoError && (
                <div className="mt-2 bg-red-100 text-red-800 px-3 py-1 rounded text-sm text-center">
                    {geoError}
                </div>
                )}
            </div>
        </div>
    );
}


function ChangeCenter({ position }) {
  const map = useMap();
  
  useEffect(() => {
    if (position) {
      map.setView(position);
    }
  }, [position, map]);

  return null;
}


function DetectClick() {
    const navigate = useNavigate();

    useMapEvent({
        click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    })
}

export default Map;

