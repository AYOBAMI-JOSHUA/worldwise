import PageNav from "../components/PageNav"

function Pricing() {
    return (
        <main className="min-h-screen bg-gray-50" >
            <PageNav />

            <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12" >
                <div className="md:w-1/2 space-y-6" >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Simple pricing.
                        <br />
                        Just $9/month.
                    </h2>
                    <p className="text-gray-600 leading-relaxed" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                        Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
                        rhoncus ut eleifend nibh porttitor.
                    </p>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Get Started
                    </button>
                </div>
                <div className="md:w-1/2">
                   <img src="img2.jpg" alt="overview of a large city with skyscrappers" className="rounded-xl shadow-xl w-full h-auto object-cover" />
                </div>
            </section>
        </main>
    )
}

export default Pricing