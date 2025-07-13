import { Link } from "react-router-dom"

function Logo() {
    return (
        <Link to="/" className="flex items-center gap-2" >
            <img src="/logo.png" alt="worldwise logo" className="h-10 sm:h-10 transition-all hover:scale-105" />
        </Link>
    )
}

export default Logo