import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import "./FriendsDetails.css"

const FriendDetails = () => {
    const history = useHistory()
    const { id } = useParams()
    const [friendsDetails, setFriendsDetails] = useState({})
    const handleAllFriend = () => {
        history.push("/friends")
    }

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriendsDetails(data))
    }, [])
    const { name, email, phone, username, address } = friendsDetails
    return (
        <div className=''>
            <div className="detail">
                <h3>friend details comming sooon{name}</h3>
                <p>email {email}</p>
                <p>phone:{phone}</p>
                <p>User name:{username}</p>
                <p>address {address?.city}</p>
                <br />
                <button onClick={handleAllFriend}>see all friends</button>

            </div>

        </div>
    );
};

export default FriendDetails;