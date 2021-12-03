// import Footer from "../components/Footer"
import SideNavbar from "../components/SideNavbar"
import ListGame from "../components/ListGame"
import { useState } from "react"
// import { SearchIcon } from "@heroicons/react/solid"
import { useEffect } from "react"
// import { getDefaultNormalizer } from "@testing-library/react"


const SearchBar = ({onSearch}) =>{
    let [search, setSearch] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        // console.log(search)
        onSearch(search)
        setSearch('')
    }

    return (
        <div className='flex w-screen h-44'>
            <div className="w-1/6 h-44"></div>
            <div className="w-4/6 h-44">
                <div className='pt-10'>
                        <div>
                            <input className='h-8 w-11/12 border-b-1 border-red bg-gpw rounded-md' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
                        </div>
                        <div className='items-center  pt-5'>
                            <button className='browseInput justify-center bg-gpc h-8 w-1/12 border-3 border-red-500 text-gpw rounded-3xl hover:rounded-md transition-all ease-linear duration-300 focus:outline-none text-center' type='submit' onClick={onSubmit} placeholder='try batman'>submit</button>
                        </div>
                    </div>
    
            </div>
            <div className="w-1/6 h-44"></div>
        </div>
    )
}

const Browse = () => {
    let [searchVar, setSearchVar] = useState("")
    let [varGameList, setGameList] = useState([])

    let SearchFunc = (searchV) =>{
        // console.log(searchV)
        setSearchVar(searchV)
        // setGameList(dummy)
    }
    

    useEffect(() =>{
        fetch(`https://www.cheapshark.com/api/1.0/games?title=${searchVar}`)
        .then(response => response.json())
        .then(json => setGameList(json))
    }, [searchVar])
    // let FetchInitData = () => {
    //     const response = fetch(`https://www.cheapshark.com/api/1.0/games?title=batman`)
    //     const data = response.json()
    //     setGameList(data)
    // }
    


    return (
        <div className='flex'>
                <SideNavbar />

                <div className='flex flex-col'>
                    {/* search form */}
                    <section>
                        <SearchBar onSearch={SearchFunc}/>
                    </section>
                    {/* LIST GAMES COMPONENT */}
                    <section>
                        <ListGame searchByName={varGameList}/>
                    </section>
                    {/* <Footer /> */}
                </div>
        </div>
    )
}

export default Browse
