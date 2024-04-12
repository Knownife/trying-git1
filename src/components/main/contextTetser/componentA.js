
import ComponentB from "./componentB";
import {useState,createContext,} from "react";

export const UserContext = createContext()

function ComponentA() {

    const [user, setUser] = useState('Nazar');





    return <div className={'box'}>

        <h1>component A</h1>
         <h1>{`Hello ${user}`}</h1>
         <UserContext.Provider value={user}>
        <ComponentB/>
         </UserContext.Provider>

    </div>
}

export default ComponentA;