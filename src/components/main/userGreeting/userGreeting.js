import React from "react";


function UserGreeting(props) {

    if(props.isConnected === true){
        return <div>
            <h1>Hello {props.userName}</h1>
        </div>
    }


}


export default UserGreeting;