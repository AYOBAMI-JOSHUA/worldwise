import PageNav from "../components/PageNav"

function Product() {
    return (
        <main className="min-h-screen bg-white" >
            <PageNav />
            
            <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12" >
                <div className="md:w-1/2 order-2 md:order-1">
                  <img src="img1.jpg" alt="person with dog overlooking mountain with sunset" className="rounded-xl shadow-xl w-full h-auto object-cover" />
                </div>
                <div className="md:w-1/2 space-y-6 order-1 md:order-2" >
                    <h2 className="text-3xl font-bold text-gray-900" >About Worldwise</h2>
                    <p className="text-gray-600 leading-relaxed" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                        Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
                        rhoncus ut eleifend nibh porttitor.
                    </p>
                    <p className="text-gray-600 leading-relaxed" >
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Product
