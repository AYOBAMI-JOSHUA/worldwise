import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"


function Homepage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white" >
            <PageNav />
            
            <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12" >
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" >
                        You travel the world.
                        <br />
                        WorldWise keeps track of your adventures.
                    </h1>
                    <h2 className="text-lg text-gray-600" >
                        A world map that tracks of your footsteps into every city you can think
                        of. Never forget your wonderful experience, and show your friends how you
                        have wandered the world. 
                    </h2>
                    <Link to="/login" className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg" >
                       start tracking now
                    </Link>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-blue-200 h-80 rounded-xl shadow-xl"><img src="logo.png" className="rounded-xl shadow-xl w-full h-full object-cover" /></div>
                </div>
            
            </section>
        </main>
    )
}

export default Homepage