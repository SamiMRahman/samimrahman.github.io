import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
            <main>
                <section className="hero-section">
                    <h1>Outliers Build</h1>
                    <h2>A team of software engineers, designers, and product managers</h2>
                    <a href="#" className="cta-button">Get in touch</a>
                </section>
                <section className="services-section">
                    <h2>Our Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Software Development</h3>
                            <p>We build custom software solutions tailored to your business needs.</p>
                        </div>
                        <div className="service-card">
                            <h3>Design</h3>
                            <p>We create beautiful, user-friendly designs that enhance user experience.</p>
                        </div>
                        <div className="service-card">
                            <h3>Product Management</h3>
                            <p>We work with you to create a product roadmap and execute on it.</p>
                        </div>
                    </div>
                </section>
                <section className="projects-section">
                    <h2>Our Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <img src="<https://via.placeholder.com/400x300>" alt="Project 1" />
                            <h3>Project 1</h3>
                            <p>Project description goes here.</p>
                        </div>
                        <div className="project-card">
                            <img src="<https://via.placeholder.com/400x300>" alt="Project 2" />
                            <h3>Project 2</h3>
                            <p>Project description goes here.</p>
                        </div>
                        <div className="project-card">
                            <img src="<https://via.placeholder.com/400x300>" alt="Project 3" />
                            <h3>Project 3</h3>
                            <p>Project description goes here.</p>
                        </div>
                    </div>
                </section>
                <section className="about-section">
                    <h2>About Us</h2>
                    <p>We are a team of experienced software engineers, designers, and product managers. Our mission is to help businesses build custom software solutions that solve their unique challenges.</p>
                </section>
                <section className="contact-section">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>
            <footer>
                <p>© 2021 Outliers Build. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
