// import React from 'react';
// import Header from './components/Header/Header';
// import Profile from './components/Profile/Profile';
// import About from './components/About/About';
// import Education from './components/Education/Education';
// // import Experience from './components/Experience/Experience';
// // import Interests from './components/Interests/Interests';
// // import Projects from './components/Projects/Projects';
// import './App.css';

// const App = () => {
//     // Mock data - you'd replace this with actual data, possibly fetched from an API or imported from a local file
//     const profileData = {
//         name: "Sami Rahman",
//         title: "Software Engineer.",
//         location: "Atlanta, GA"
//     };

//     const aboutData = "I'm a software engineer and currently work as an AI Trainer for a Scale AI subsidiary. I'm here just learning and building!";

//     // Mock array data for education, experience, etc.
//     const educationData = [];
//     const experienceData = [];
//     const interestsData = [];
//     const projectsData = [];

//     return (
//         <div className="App">
//             <Header />
//             <main>
//                 <Profile {...profileData} />
//                 <About content={aboutData} />
//                 <Education schools={educationData} />
//                 {/* <Experience jobs={experienceData} />
//                 <Interests interests={interestsData} />
//                 <Projects projects={projectsData} /> */}
//             </main>
//         </div>
//     );
// };

// export default App;
import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>hi, i'm carmen.</h1>
                <p>i'm a physicist, programmer, and designer.</p>
                <p>i think a lot about information representations, human-computer interfaces, embodied cognition, and the nature of thought.</p>
                <p>i currently work as the CEO of Residua AI, where we are building AI-enabled tools for expanding the human mind.</p>
                <p>Prior to this, I studied physics, math, and CS at Stanford.</p>
                <p>Feel free to poke around this website, which serves as a sampling of what I am currently reading, writing, and thinking about.</p>
                <p>If what you find interests you, please get in touch.</p>
            </header>
        </div>
    );
}

export default App;
