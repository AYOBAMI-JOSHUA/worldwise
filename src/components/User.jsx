import { useAuth } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function User() {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    function handleClick() {
        logout();
        navigate("/");
    }

    if (!isAuthenticated || !user) {
        return null;
    }

    return (
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-gray-200">
            <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                onError={(e) => {
                    e.target.src = "https://i.pravatar.cc/100?u=fallback";
                }}
            />
            <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                Welcome, {user.name}
            </span>
            <Button type="button" style="danger" onClick={handleClick} >Log out</Button>
        </div>
    );
}

export default User;