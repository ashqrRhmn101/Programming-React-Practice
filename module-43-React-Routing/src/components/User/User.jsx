import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const {name, email, phone, id} = user;

    const userStyle ={
        border: "2px solid",
        borderRadius: "10px",
        padding: "5px",
        margin: "5px",
        backgroundColor: "green",
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;