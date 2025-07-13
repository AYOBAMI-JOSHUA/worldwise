import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";


function Sidebar() {
    return (
        
        <div className="bg-gray-800 w-1/2 overflow-y-auto text-gray-100 flex flex-col h-full p-4 border-r border-gray-700">
            <Logo className="mb-6"/>
            <div className="mb-6">
                <AppNav />
            </div>

            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>

            <footer className="mt-auto pt-4 text-center text-sm text-gray-400">
                <p>
                    &copy; Copyright {new Date().getFullYear()} by worldwise Inc.
                </p>
            </footer>
        </div>
    )
}

export default Sidebar