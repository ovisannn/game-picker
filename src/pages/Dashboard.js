import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Dashboard = () => {
    return (
    <div>
        <Navbar />
        {/* Section 1 */}
        <section className="relative w-full">
            <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
            <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
                {/* content 2 */}
                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                <a href="#_" className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110 bgCyan" style={{backgroundImage: 'url("")'}}>
                </a>
                <div className="relative z-20 w-full h-auto py-8 text-white bgCyan border-t-0 border-yellow-200 px-7">
                    <h2 className="mb-5 text-5xl font-bold"><a href="#_">Input <br /> income</a></h2>
                    <p className="mb-2 text-lg font-normal text-blue-100 opacity-100">keep track your income to maximize the output <br />
                        of buying games</p>
                </div>
                </div>
                {/* content 2 */}
                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                <a href="#_" className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110 bgCyan" style={{backgroundImage: 'url("")'}}></a>
                <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bgCyan border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                    <h2 className="mb-5 text-5xl font-bold"><a href="#_">Input <br /> outcome</a></h2>
                    <p className="mb-2 text-lg font-normal opacity-100 text-yellow-50">keep track your outcome to maximize the output <br /> of buying games</p>
                </div>
                </div>
                {/* content 3*/}
                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                <a href="#_" className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110 bgCyan" style={{backgroundImage: 'url("")'}}></a>
                <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bgCyan border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                    <h2 className="mb-5 text-5xl font-bold"><a href="#_">Set <br /> wishlist</a></h2>
                    <p className="mb-2 text-lg font-normal opacity-100 text-yellow-50">set your wishlist and get ready to throw all of your money into <br />
                    game.</p>
                </div>
                </div>
                {/* --------- */}
            </div>
            </div>
        </section>
        <Footer />
    </div>
        
    )
}

export default Dashboard
