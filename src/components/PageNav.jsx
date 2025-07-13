import { NavLink } from "react-router-dom"
import Logo from "./Logo"

function PageNav() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md" >
            <Logo className="h-10" />

            <ul className="flex space-x-6">
                <li>
                    <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`} >Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="/product" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`} >Product</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`} >Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default PageNav
