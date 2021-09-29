import React from 'react';
import { Link } from 'react-router-dom';
import "./Friend.css"
const Friend = (props) => {
    const { name, id, email } = props.friend
    console.log(name);
    const url = `/friend/${id}`
    return (
        <div className="friend">
            <h1>name : {props.friend.name}</h1>
            <p>email:{email}</p>
            <Link to={url}>Lern More</Link>
        </div >
    );
};

export default Friend;