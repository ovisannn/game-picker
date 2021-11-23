const Button = ({text}) => {
    const btnDetail ={
        backgroundColor:'#00ADB5',
        width:'166px',
        height:'60px',
    }
    return (
        // <button type="button">{text}</button>
        <button class="text-white font-bold" style={btnDetail}>
        {text}
        </button>
    )
}

export default Button
