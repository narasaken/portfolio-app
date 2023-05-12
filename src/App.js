import { Link, Element } from "react-scroll";
import React from "react";
import './App.css';
import ME from "./assets/me.jpeg";
import Desktop from "./assets/Desktop.png";
import News from "./assets/News List.png";
import Todo from "./assets/To Do.png";

function App() {
  return (
    <>
    <nav>
      <h2>Nazira Saken</h2>
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="contacts">
          <Link to="contacts" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    <hr />
      
      <div id="start">
          <h1>Hi, I'm Nazira, <br /> I build things for the web.</h1>
          <p>I am a software developer and this is my portfolio.</p>
          <button>Check out my CV</button>
      </div>
      <hr />
      <Element name="about" className="section">
        <div id="about-me">
        <img className="myImage" src={ME} alt="me"/>
          <h1>About me</h1>
          <p>I am a skilled software developer, and this website serves as my professional portfolio. It showcases my expertise and experience in software development.</p>
          <div id="two-lists">
            <ul id="first-list">
              <li>Full-Stack Developer located in Kazakhstan</li>
              <li>A problem-solver at heart, continuously seeking out new challenges</li>
              
            </ul>
            <ul id="second-list">
              <li>Design intuitive user interfaces using HTML, CSS, and JavaScript</li> 
              <li>Craft server-side logic using Python, Java, or Node.js</li>
            </ul>
          </div>
        </div>
      </Element>
    <hr />
      <Element name="experience" className="section">
      <div className="work-info">
        <h1>Experience</h1>
        <div className="work1">
          <h5>2021-Present</h5>
          <ul>
            <li>Economist at Beineu-Shymkent Gas Pipeline LLP</li>
          </ul>
        </div>
        <div className="city">
          <h6>Almaty, Kazakhstan</h6>
        </div>
          <div className="details">
            <p>
              Facilitated in the acquisition of a $700,000,000 financing for the company's project. 
              <br/>Delivered specialized consultative economic support to various project teams. 
              <br/>Analyzed budgets and implemented action plans to rectify issues. 
              <br/>Created detailed technical reports highlighting findings to diverse stakeholders. 
            </p>
          </div>

          <div className="work2">
            <h5>2017-2020</h5>
            <ul>
              <li>Programme Representative at City, University of London</li>
            </ul>
          </div>
          <div className="city">
            <h6>London, United Kingdom</h6>
          </div>
          <div className="details">
            <p>
              Maintained communication channels between students and the Student-Staff Liaison Committee. 
              <br/>Managed inquiries and emails and engaged in key meetings.
              <br/>Served as a spokesperson for all of the students on my course
            </p>
          </div>
      </div>
      </Element>
      <hr />

      <Element name="projects" className="section">
        <h1>Projects I've Worked On</h1>
        <div className="all-projects">
          
          <div className="project1">
            <img src={Desktop} alt="project1"/>
            <div className="project1-details">
              <h2>Find jobs for junior developers</h2>
              <p>A one-page website for junior developers that provides 
                opportunities to find vacancies and upload resume
              </p>
            </div>
          </div>
          <div className="project2">
            <img src={News} alt="project2"/>
            <div className="project2-details">
              <h2>Media as Medium</h2>
              <p>A site for social journalism where you can post articles 
                and view those published by others
              </p>
            </div>
          </div>
          <div className="project3">
            <img src={Todo} alt="project3"/>
            <div className="project3-details">
              <h2>To Do App</h2>
              <p>ToDo list where you can add tasks, mark as completed and delete
              </p>
            </div>
          </div>
        </div>
      </Element>

      <Element name="contacts" className="section">
        <div>
          <hr/>
          <h1>Say Hello</h1>
          <p>Loosely designed in Figma and coded in Visual Studio Code by yours truly. </p>
          <button>Get In Touch</button>
        </div>
      </Element>
    </>
  );
}

export default App;
