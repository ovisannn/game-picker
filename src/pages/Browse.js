import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ListGame from "../components/ListGame"

const Browse = () => {
    return (
        <div>
            <section>
                <Navbar />
            </section>

            <section>
                <div className="container pt-20 pb-20">
                    <div class="flex items-center justify-center w-screen">
                        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                            <div class="rounded-full bg-white shadow flex w-full">
                                <input
                                    type="text"
                                    placeholder="Try 'Batman'"
                                    class="w-full rounded-tl-full rounded-bl-full py-2 px-4" />
                                <button class="rounded-tr-full rounded-br-full py-2 px-4">
                                    <p class="font-semibold uppercase">Search</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pb-20">
                    {/* LIST GAMES COMPONENT */}
                    <ListGame />
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Browse
