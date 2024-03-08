import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Education from './components/Education/Education';
// import Experience from './components/Experience/Experience';
// import Interests from './components/Interests/Interests';
// import Projects from './components/Projects/Projects';
import './App.css';

const App = () => {
    // Mock data - you'd replace this with actual data, possibly fetched from an API or imported from a local file
    const profileData = {
        name: "Sami Rahman",
        title: "Software Engineer.",
        location: "Atlanta, GA"
    };

    const aboutData = "I'm a software engineer and currently work as an AI Trainer for a Scale AI subsidiary. I'm here just learning and building!";

    // Mock array data for education, experience, etc.
    const educationData = [];
    const experienceData = [];
    const interestsData = [];
    const projectsData = [];

    return (
        <div className="App">
            <Header />
            <main>
                <Profile {...profileData} />
                <About content={aboutData} />
                <Education schools={educationData} />
                {/* <Experience jobs={experienceData} />
                <Interests interests={interestsData} />
                <Projects projects={projectsData} /> */}
            </main>
        </div>
    );
};

export default App;
