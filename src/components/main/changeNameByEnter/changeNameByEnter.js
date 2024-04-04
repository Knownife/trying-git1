
import {useState} from "react";
function ChangeNameByEnter(){
    let [name,setName] = useState('User');
    let [age,setAge] = useState(0);
    let [comment,setComment]= useState('');
    let [shopping,setShopping]=useState('');

    let handleClickName = (event)=>{
        setName(event.target.value)
    }
    let handleClickNumber = (event)=>{
        setAge(event.target.value)
    }
    let handleClickComment = (event)=>{
        setComment(event.target.value)
    }
    let handleClickShopping = (event)=>{
        setShopping(event.target.value)
    }

    return <div>
        <input value={name} onChange={handleClickName}/>
        <h1>Name:{name}</h1>
        <br/>

        <input value={age} onChange={handleClickNumber} type={"number"}/>
        <h1>Name:{age}</h1>
        <br/>

        <textarea value={comment} onChange={handleClickComment}></textarea>
        <h1>your comment: {comment}</h1>
        <br/>

        <label >
            <input type={"radio"} value={'Mastercard'} checked={shopping==='Mastercard'} onChange={handleClickShopping}/>
            Mastercard
        </label>
        <br/>
        <label>
            <input type={"radio"} value={'Visa'} checked={shopping==='Visa'} onChange={handleClickShopping}/>
            Visa
        </label>
        <br/>
        <label>
            <input type={"radio"} value={'Capital One'} checked={shopping==='Capital One'} onChange={handleClickShopping}/>
            Capital One
        </label>
        <h1>You choose: {shopping}</h1>

    </div>
}

export default ChangeNameByEnter;