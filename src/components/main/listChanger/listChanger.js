
import {useState} from "react";
function ListChanger(){
    let [foods,setFoods] = useState(['orangle','apple','carrot','potato'])
    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value ='';
        setFoods(prevFoods =>[...prevFoods,newFood])
    }
    function  handleRemoveFood(index){
        setFoods(foods.filter((_,i)=>i!==index))
    }
    return <div>
        <h1>List of food</h1>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>) }
        </ul>
        <input type={"text"} id={'foodInput'} placeholder={'add some food'}/>
        <button onClick={handleAddFood}>click to add food</button>
        <br/>




    </div>
}

export default ListChanger;