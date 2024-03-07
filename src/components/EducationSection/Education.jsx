import React from 'react';
import './Education.css';

const Education = () => {
    // Skills/topics data array
    const skills = [
        "Computer Vision",
        "Automata and Complexity",
        "Design and Analysis of Algorithms",
        "Machine Learning"
    ];

    return (
        <section className="Education">
            <h2 className="Education-title">Education</h2>
            <div className="Education-university">
                <h3 className="Education-universityName">Georgia Institute of Technology</h3>
                <p className="Education-degree">Bachelor's of Science in Computer Science (concentration: Artificial Intelligence and Human-Computer Interaction)</p>
                <div className="Education-skillsContainer">
                    {/* Mapping over your skills/topics. Replace with your own data. */}
                    {skills.map(skill => (
                        <div key={skill} className="Education-skill">
                            {skill}
                        </div>
                    ))}
                </div>
                {/* Add additional education entries here */}
            </div>
            {/* ... */}
        </section>
    );
}

export default Education;
