import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import GameCard from "./GameCard"

const var_Games = [
    {
        gameID:"612",
        steamAppID:"21000",
        cheapest:"4.25",
        cheapestDealID:"yuFa2LP6YPaGwaTN7wgUfIe9bStUX5FRUK3QJznSS8s%3D",
        external:"LEGO Batman",
        internalName:"LEGOBATMAN",
        thumb:"https://originassets.akamaized.net/origin-com-store-final-assets-prod/195763/142.0x200.0/1040463_MB_142x200_en_US_^_2017-09-08-15-21-36_d7034d41216b6dc201fb20e0cee37c1e66190a11.jpg"},
]

    // 3. Create out useEffect function
    // useEffect(() => {
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //     .then(response => response.json())
    //         // 4. Setting *dogImage* to the image url that we received from the response above
    //     .then(data => setDogImage(data.message))
    //   },[])
const ListGame = ({searchByName}) => {
    const [var_GameList, set_game] =  useState(var_Games)
    // need rework for search
    let getGame_URL = `https://www.cheapshark.com/api/1.0/games?title=skyrim`
    useEffect(() => {
        fetch(getGame_URL)
        .then(Response => Response.json())
        .then(data => set_game(data))
    },[])

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-20 justify-items-center md:pl-52 md:pr-52'>
            {var_GameList.map((game)=>(
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    )
}

export default ListGame
