import GameCard from "./GameCard"

const ListGame = ({searchByName}) => {

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-20 justify-items-center md:pl-52 md:pr-52'>
            {searchByName.map((game)=>(
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    )
}

export default ListGame
