import React from "react";
import styles from "./Projects.module.css";
import Project from "./project/Project";
import weather_app from "../../images/projectImages/weather_app.png";
import quotes_app from "../../images/projectImages/quotes_app.png";
import twitter_app from "../../images/projectImages/twitter.png";
import guess_number_game from "../../images/projectImages/guess_number_game.png";
import cricket from "../../images/projectImages/cricket.png";
import ecommerce from "../../images/projectImages/ecommerce.jpg";
import handyman from "../../images/projectImages/handyman.png";
import next from "../../images/projectImages/next.png";
import colorsImage from "../../images/projectImages/colorsImage.png";

const Projects = () => {
  return (
    <div id="section_project" className={styles.container}>
      <div className={styles.content}>
        <h2>Projects</h2>
        <p>
          I love learning about new technology and design, which helps me create
          better projects.
        </p>
        <p>
          I'm always trying to do something new and exciting, which keeps me
          motivated to improve my skills.
        </p>
      </div>
      <div className={styles.projects}>
        <Project
          image={weather_app}
          appName={"Weather App"}
          link={"https://amar-weather.netlify.app/"}
          githubLink={"https://github.com/amarjitmangarhia/weather-app-main"}
          appDescription={
            "The React Weather App simplifies weather checks. Enter a city name, get instant, real-time weather data. Easy, fast, and user-friendly."
          }
        />
        <Project
          image={quotes_app}
          appName={"Workout Buddy"}
          link={"https://mernstackapp-f73d4c3ddb96.herokuapp.com/"}
          githubLink={"https://github.com/amarjitmangarhia"}
          appDescription={
            "Built with the MERN stack—React, MongoDB, Node.js, and Express—this app showcases comprehensive full-stack development expertise, seamlessly integrating frontend and backend functionalities."
          }
        />
        <Project
          image={ecommerce}
          appName={"Guess Number Game"}
          link={"https://guess-number-game-main.vercel.app/"}
          githubLink={
            "https://github.com/amarjitmangarhia/guess-number-game-main"
          }
          appDescription={
            "Welcome to the Guess Number Game! Your challenge is to guess a number between 1 and 20. After making your guess, the game will reveal the hidden number to see if you've guessed correctly."
          }
        />
        <Project
          image={handyman}
          appName={"HandyMan Tool Website"}
          link={"https://frontendprojectwebsite.vercel.app/"}
          githubLink={"https://github.com/amarjitmangarhia/frontendproject"}
          appDescription={
            "Explore my website project dedicated to essential handyman tools, designed to simplify DIY projects effortlessly."
          }
        />
        <Project
          image={next}
          appName={"Landing Page - Web Design"}
          link={"https://amarnext.netlify.app/"}
          githubLink={"https://github.com/amarjitmangarhia/landing-page"}
          appDescription={
            "Just Simple Web Design created by me using HTML, CSS, JAVASCRIPT. Fully Responsive."
          }
        />
        <Project
          image={colorsImage}
          appName={"Colors Landing Page"}
          link={"https://amarcolors.netlify.app/"}
          githubLink={"https://github.com/amarjitmangarhia/landing-lage-2"}
          appDescription={
            "Web Design with infinite scroll and colorful design created by me using HTML, CSS, JAVASCRIPT. Fully Responsive."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
