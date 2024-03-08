import React from 'react';
import './About.css';
import profilePic from '/Users/sami1/Documents/git_local/samimrahman.github.io/src/pictures/meNcheetie.jpeg';

function About() {
    return (
        <section className="About">
            <div className="About-header">
                <img src={profilePic} alt="Profile" className="About-image" />
                <h2 className="About-title">About</h2>
            </div>
            <p className="About-description">
                I'm a software engineer and currently work as an AI Trainer for a Scale AI subsidiary.
                I'm here just learning and building!
            </p>
        </section>
    );
}

export default About;
