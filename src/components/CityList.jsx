import { useCities } from "../context/CitiesContext";
import CityItem from "./CityItems";
import Message from "./Message";
import Spinner from "./Spinner";

function CityList() {
    const {cities, isLoading} = useCities();


    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
           <Message message="add your first city by clickin on a city on the map" />
        )


    return  (
        <ul className="list-none p-0 my-8 flex flex-col gap-4"> 
            {cities.map((city) => (
                <CityItem city={city} key={city.id} />
            ))}
        </ul>

    )
}

export default CityList;