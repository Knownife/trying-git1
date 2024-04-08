
import {useState,useEffect} from "react";


function EffectTester(){

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        console.log('Hi')
    },[])

    function handleResize(){
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    return <div>
        <p>Width = {width}px</p>
        <p>Height = {height}px</p>


    </div>
}

export default EffectTester;