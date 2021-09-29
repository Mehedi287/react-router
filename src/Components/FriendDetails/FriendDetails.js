import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./FriendsDetails.css"

const FriendDetails = () => {
    const { id } = useParams()
    const [friendsDetails, setFriendsDetails] = useState({})

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
                <p>address {address.city}</p>
            </div>

        </div>
    );
};

export default FriendDetails;