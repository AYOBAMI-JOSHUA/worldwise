import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
import Spinner from "./Spinner";
import { useUrlPosition } from "../hooks/useUrlPosition";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints)
}


function City() {
    const {id} = useParams();
    const navigate = useNavigate();
  
    const [ lat, lng ] = useUrlPosition();
    const {getCity, currentCity, isLoading } = useCities();



    useEffect(
        function () {
            getCity(id);
        },
        [id]
    )

    const { cityName, emoji, date, notes } = currentCity;

    // const newDate = formatDate(date)


    if (isLoading) return <Spinner />;
    
    return (
        <div className="max-w-3xl mx-auto p-6 md:p-8 my-8 bg-white rounded-xl shadow-lg">
          {/* Header Section */}
            <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {cityName}
                </h1>
                <span className="text-3xl">{emoji}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between mt-2 text-sm text-gray-500">
                <span>Visited on {date}</span>
                <span>Coordinates: {lat}, {lng}</span>
                </div>
            </div>

            {/* Notes Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">My Notes</h2>
                <p className="text-gray-600 leading-relaxed">{notes}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => navigate(-1)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all hover:-translate-y-0.5 shadow-sm">
                ← Back to list
                </button>
            </div>

        </div>
    )
}

export default City