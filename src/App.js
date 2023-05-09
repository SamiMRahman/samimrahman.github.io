import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <nav>
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      <main>
        <section className="hero-section">
          <h1>Hi, I'm Sami!</h1>
          <h2>Software Engineer</h2>
          <a href="#" className="cta-button">Get in touch</a>
        </section>
        <section className="services-section" id='services'>
          <h2>Professional Experience</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>VMware Intern</h3>
              <p>May 21' - Aug 21'</p>
            </div>
            <div className="service-card">
              <h3>VMware Intern</h3>
              <p>May 21' - Aug 21'</p>
            </div>
            <div className="service-card">
              <h3>VMware MTS1</h3>
              <p>Feb 22' - Present</p>
            </div>
          </div>
        </section>
        <section className="projects-section" id='projects'>
          <h2>My Projects</h2>
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
        <section className="about-section" id='about'>
          <h2>About Me</h2>
          <p>We are a team of experienced software engineers, designers, and product managers. Our mission is to help businesses build custom software solutions that solve their unique challenges.</p>
        </section>
        <section className="contact-section" id='contact'>
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p> Built by Sami :)</p>
      </footer>
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
