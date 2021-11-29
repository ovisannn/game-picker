import GameCard from "./GameCard"

    // 3. Create out useEffect function
    // useEffect(() => {
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //     .then(response => response.json())
    //         // 4. Setting *dogImage* to the image url that we received from the response above
    //     .then(data => setDogImage(data.message))
    //   },[])
const ListGame = ({searchByName}) => {
    // const [var_GameList, set_game] =  useState(var_Games)
    // console.log(searchByName)
    // need rework for search
    // let getGame_URL = `https://www.cheapshark.com/api/1.0/games?title=${searchByName}`
    // useEffect(() => {
    //     fetch(getGame_URL)
    //     .then(Response => Response.json())
    //     .then(data => set_game(data))
    // },[])

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-20 justify-items-center md:pl-52 md:pr-52'>
            {searchByName.map((game)=>(
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    )
}

export default ListGame
