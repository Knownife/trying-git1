
function Button(){

    let handleClick = (e)=> e.target.textContent = 'Ouch'

    return <div> <button onClick={(e)=>handleClick(e)}> Click me</button></div>
}

export default Button;