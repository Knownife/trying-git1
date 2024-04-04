import {useState} from "react";
function ChangeName(){

    let [name,setName] = useState('user');
    let handleClick = ()=>{
        setName('Nazar')
    }

    return <div>
        <h1>Your name:{name}</h1>
        <button onClick={handleClick}>click here</button>
    </div>
}

export default ChangeName;
