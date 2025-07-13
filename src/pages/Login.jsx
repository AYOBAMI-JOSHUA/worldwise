import { useEffect, useState } from "react";
import Button from "../components/Button";
import PageNav from "../components/PageNav"
import { useAuth } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("bami@example.com")
    const [password, setPassword] = useState("qwerty")
    const { isAuthenticated, login} = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        if (email && password) login(email, password);

    };

    useEffect(
        function () {
            if (isAuthenticated) navigate("/app")
        },[isAuthenticated, navigate]
    )

    return (
        <main className="min-h-screen bg-gray-50" >
            <PageNav />

            <section className="container mx-auto px-6 py-16 max-w-md">
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login to your account</h2>

                    <form className="space-y-6" onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" >Email address</label>
                            <input 
                            type="email" 
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1" >Password</label>
                            <input 
                            type="password" 
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            />
                        </div>
                        <Button type="submit" >Log In</Button>
                    </form>
                </div>
            </section>
            
        </main>
    )
}

export default Login