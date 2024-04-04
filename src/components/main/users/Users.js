import React from "react";
import propTypes from "prop-types";

function Users(props) {

    
    return (
        <div>
            <p>Name = {props.name}</p>
            <p>Age = {props.age}</p>
            <p>Is student {props.isStudent ? "Yes" : "No" }</p>
        </div>
    );
}

Users.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}
Users.defaultProps = {
    name:'guest',
    age:'0',
    isStudent: undefined
}
export default Users;