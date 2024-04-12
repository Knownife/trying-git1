
import {useContext} from "react";
import {UserContext} from "./componentA";

function ComponentD() {
    const user = useContext(UserContext)
    return <div className={'box'}>
        <h1>component D</h1>
        <h2>Bye {user}</h2>
    </div>
}

export default ComponentD;