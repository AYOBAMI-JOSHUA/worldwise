import Sidebar from "../components/Sidebar"
import Map from "../components/Map"

function AppLayout() {
    return (
        <div className="flex h-screen " >
            <Sidebar />
            <div className="w-1/2 relative ">
                <Map />
            </div>
        </div>
    )
}

export default AppLayout