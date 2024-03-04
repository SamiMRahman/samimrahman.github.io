import React from 'react';
import './ProfileSection.css';
import profilePic from './path-to-your-image.jpg'; // Add your image in the src folder

function ProfileSection() {
    return (
        <section className="profile">
            <img src={profilePic} alt="Your Name" />
            <h1>Sami Rahman</h1>
            <p>Software Engineer.</p>
            <p>Atlanta, GA</p>
            {/* Add your social icons here */}
        </section>
    );
}

export default ProfileSection;
