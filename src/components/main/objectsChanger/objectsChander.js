
import {useState} from "react";

function ObjectsChander(){
    const [pizzas,setPizza] = useState([])
    const [pizzaName,setPizzaName] = useState('')
    const [pizzasCookingTime, setPizzasCookingTime] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`);
    const [pizzasSupplements,setPizzasSupplements] = useState([])


    function handleClickPizzasAdd(){
        const newPizzas = {
            cookingTime: pizzasCookingTime,
            supplements: pizzasSupplements,
            name:pizzaName,
        }
        setPizza(pizzas=> [...pizzas,newPizzas] )
    }

    function handleClickPizzasRemowe(index){}

    function handleCLickPizzaName(event){
        setPizzaName(event.target.value)
    }



    function handleClickSupplements(event){
        setPizzasSupplements(event.target.value)
    }

    return <div>
        <h2>Lis of pizza Objects</h2>
        <ul>
            {pizzas.map((pizza, index) => {
                return (
                    <li key={index}>
                        {pizza.name}:
                        Cooking time: {pizza.cookingTime};
                        <br/>
                        Supplements for pizza :{pizza.supplements}
                    </li>
                )

            })}
        </ul>
        <input type={'text'} value={pizzaName} onChange={handleCLickPizzaName}/>
        <br/>
        <input type={'number'} value={pizzasCookingTime}/>
        <br/>
        <input type={'text'} value={pizzasSupplements} onChange={handleClickSupplements}/>
        <br/>

        <button onClick={handleClickPizzasAdd}>add new pizza</button>
    </div>
}

export default ObjectsChander;