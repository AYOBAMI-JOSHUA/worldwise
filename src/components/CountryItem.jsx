
function CountryItem({country}) {

    return (
        <li className="flex items-center gap-6 bg-dark-2 rounded-lg py-4 px-8 relative">
            <span className="text-4xl">{country.emoji}</span>
            <span className="text-4xl">{country.country}</span>
        </li>
    )
}

export default CountryItem;