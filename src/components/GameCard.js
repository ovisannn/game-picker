import Button from '../components/Button'
const GameCard = ({game}) => {
    return (
        <div className='bgFadeCyan md:h-44 md:w-96 h-32 w-64 rounded-md justify-items-center'>
            <h2 className='text-black text-center'>{game.external}</h2>
            <Button text='add to wish list'/>
        </div>
    )
}

export default GameCard
