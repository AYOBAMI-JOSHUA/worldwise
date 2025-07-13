import { Link } from "react-router-dom";
import { useCities } from "../context/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints)
}

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));


function CityItem({city}) {
    const { currentCity, deleteCity } = useCities();
    const { cityName, emoji, date, id, position } = city;

    const isActive = currentCity?.id === id;


    function handleClick(e) {
        e.preventDefault();
        deleteCity(id);
    };

    return (
        <li className={`relative ${isActive ? "before:content-[''] before:absolute before:-inset-[2px] before:border-2 before:border-cyan-200 before:rounded-lg before:pointer-events-none before:z-10" : ""}`}>
            <Link className="flex items-center gap-6 bg-dark-2 rounded-lg py-4 px-8 relative transition-all hover:bg-dark-3" to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
                <span className="text-4xl">{emoji}</span>
                <h3 className="text-xl font-semibold">{cityName}</h3>
                <time className="ml-auto text-light-1">({formatDate(date)})</time>
                <button onClick={handleClick} className="text-3xl text-light-2 hover:text-red hover:scale-125 transition-all">&times;</button>
            </Link>
        </li>
    );
}

export default CityItem;
