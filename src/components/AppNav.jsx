import { NavLink } from "react-router-dom"

function AppNav() {
    return (
        <nav  className="border-b border-gray-600">
            <ul className="flex">
                <li className="flex-1">
                    <NavLink to="cities" className={({isActive}) => `block text-center py-3 px-4 transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-500 text-white font-medium' : 'text-gray-400 hover:bg-gray-700 hover:text-gray-300'}`} >Cities</NavLink>
                </li>
                <li>
                    <NavLink to="countries" className={({isActive}) => `block text-center py-3 px-4 transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-500 text-white font-medium' : 'text-gray-400 hover:bg-gray-700 hover:text-gray-300'}`} >Countries</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default AppNav