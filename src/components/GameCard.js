// import Button from '../components/Button'
// import { useState } from "react"
const GameCard = ({game}) => {
    // const [steamData, setSteamData] = useState([])

    // fetch(`https://store.steampowered.com/api/appdetails?appids=${game.steamAppID}&cc=id&filters=price_overview`)
    // .then(response => response.json())
    // .then(json => setSteamData(json))
    // console.log(steamData)

    return (
<div className=" rounded-lg shadow-xl bg-gpgd">
  <img
    src={game.thumb}
    alt=""
    className="rounded-t-lg h-60 w-96 object-cover"
  />
  <header className=" text-xl font-extrabold p-4 text-gpw text-center">{game.external}</header>
  <div className="px-5">
    <p className="text-gpw text-center">
        Cheapest Price right now :
    </p>
    <p className='text-gpw text-center'>
        Rp.{game.cheapest*14403}
    </p>
  </div>

  <footer className="text-right py-3 px-8 text-gray-500">
    <button
      className="py-2 px-4 mt-5 bg-gpc rounded-lg text-white font-semibold hover:bg-gpcl hover:text-gpc"
    >
      Set as whislist
    </button>
  </footer>
</div>
    )
}

export default GameCard
