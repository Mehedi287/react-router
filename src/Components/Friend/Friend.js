import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Friend.css"
const Friend = (props) => {
    const history = useHistory()

    const { name, id, email } = props.friend
    console.log(name);
    const url = `/friend/${id}`
    const handleHistory = () => {
        history.push(`/friend/:${id}`)
    }
    return (
        <div className="friend">
            <h1>name : {props.friend.name}</h1>
            <p>email:{email}</p>
            <Link to={url}>Lern More</Link>
            <br />
            <button onClick={handleHistory}> add detaisl</button>
        </div >
    );
};

export default Friend;