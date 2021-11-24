import { useState } from "react/cjs/react.development"

const games = [
    {
        gameID:"612",
        steamAppID:"21000",
        cheapest:"4.25",
        cheapestDealID:"yuFa2LP6YPaGwaTN7wgUfIe9bStUX5FRUK3QJznSS8s%3D",
        external:"LEGO Batman",
        internalName:"LEGOBATMAN",
        thumb:"https:\/\/originassets.akamaized.net\/origin-com-store-final-assets-prod\/195763\/142.0x200.0\/1040463_MB_142x200_en_US_^_2017-09-08-15-21-36_d7034d41216b6dc201fb20e0cee37c1e66190a11.jpg"},
        {
            gameID:"612",
            steamAppID:"21000",
            cheapest:"4.25",
            cheapestDealID:"yuFa2LP6YPaGwaTN7wgUfIe9bStUX5FRUK3QJznSS8s%3D",
            external:"LEGO Batman",
            internalName:"LEGOBATMAN",
            thumb:"https:\/\/originassets.akamaized.net\/origin-com-store-final-assets-prod\/195763\/142.0x200.0\/1040463_MB_142x200_en_US_^_2017-09-08-15-21-36_d7034d41216b6dc201fb20e0cee37c1e66190a11.jpg"},
            {
                gameID:"612",
                steamAppID:"21000",
                cheapest:"4.25",
                cheapestDealID:"yuFa2LP6YPaGwaTN7wgUfIe9bStUX5FRUK3QJznSS8s%3D",
                external:"LEGO Batman",
                internalName:"LEGOBATMAN",
                thumb:"https:\/\/originassets.akamaized.net\/origin-com-store-final-assets-prod\/195763\/142.0x200.0\/1040463_MB_142x200_en_US_^_2017-09-08-15-21-36_d7034d41216b6dc201fb20e0cee37c1e66190a11.jpg"},
    ]

const ListGame = () => {
    const [var_GameList, set_game] =  useState(games)
    return (
        <div>
            {var_GameList.map((game)=>(
                <h3 className = 'text-white' key ={game.gameID}>{game.external}</h3>
            ))}
        </div>
    )
}

export default ListGame
