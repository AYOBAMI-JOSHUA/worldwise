
import { useCities } from "../context/CitiesContext";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList() {
    const {cities, isLoading} = useCities();

    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
           <Message message="add your first country by clickin on a country on the map" />
        )

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.city).includes(city.country))
            return [...arr, { country: city.country, emoji: city.emoji}];
    }, []);

    return  (
        <ul className="list-none p-0 my-8 flex flex-col gap-4"> 
            {countries.map((country) => (
                <CountryItem country={country} key={country.id} />
            ))}
        </ul>

    )
}

export default CountryList;