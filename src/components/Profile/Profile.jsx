import React from 'react';
import './Profile.css';

const Profile = ({ name, title, location }) => (
    <section className="Profile">
        <h1>{name}</h1>
        <p className="title">{title}</p>
        <p className="location">{location}</p>
    </section>
);

export default Profile;
