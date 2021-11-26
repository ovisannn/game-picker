import Footer from "../components/Footer"
import SideNavbar from "../components/SideNavbar"
import ListGame from "../components/ListGame"
import { useState } from "react"

const SearchBar = () =>{
    return (
        <>
        
        </>
    )
}

const Browse = () => {
    let [searchVar, setSearchVar] = useState("")

    return (
        <div className='flex'>
                <SideNavbar />
                <div>
                    {/* LIST GAMES COMPONENT */}
                    <ListGame searchByName={searchVar}/>
                    <Footer />
                </div>
                    {/* <div className="container pt-20 pb-20">
                        <div class="flex items-center justify-center w-screen">
                            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                                <div class="rounded-full bg-white shadow flex w-full">
                                    <input
                                        type="text"
                                        placeholder="Try 'Batman'"
                                        class="w-full rounded-tl-full rounded-bl-full py-2 px-4 browseInput"
                                        value={searchVar}
                                        onChange={(e)=>(setSearchVar(e.target.value))}
                                        />
                                    <button class="rounded-tr-full rounded-br-full py-2 px-4">
                                        <p class="font-semibold uppercase">Search</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
    )
}

export default Browse
