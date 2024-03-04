import React from 'react';
import './EducationSection.css';

const EducationSection = () => {
    return (
        <div style={styles.educationSection}>
            <h2>Education</h2>
            <div style={styles.university}>
                <h3>Georgia Institute of Technology</h3>
                <p style={styles.degree}>Bachelor's of Science in Computer Science (concentration: Artificial Intellgience and Human-Computer Interaction)</p>
                <div style={styles.skillsContainer}>
                    {/* Mapping over your skills/topics. Replace with your own data. */}
                    {["Computer Vision", "Automata and Complexity", "Design and Analysis of Algorithms", /* ... more skills */].map(skill => (
                        <div key={skill} style={styles.skill}>
                            {skill}
                        </div>
                    ))}
                </div>
                {/* Add additional education entries here */}
            </div>
            {/* ... */}
        </div>
    );
}

export default EducationSection;

// Styles object for inline styling
const styles = {
    educationSection: {
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px'
    },
    university: {
        marginBottom: '20px'
    },
    degree: {
        fontWeight: '600',
        color: '#333'
    },
    skillsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '10px'
    },
    skill: {
        padding: '5px 10px',
        background: '#f0f0f0',
        borderRadius: '5px',
        border: '1px solid #ddd'
    }
};
