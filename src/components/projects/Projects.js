import React from "react";
import styles from "./Projects.module.css";
import Project from "./project/Project";
import weather_app from "../../images/projectImages/weather_app.png";
import quotes_app from "../../images/projectImages/quotes_app.png";
import twitter_app from "../../images/projectImages/twitter.png";
import guess_number_game from "../../images/projectImages/guess_number_game.png";
import cricket from "../../images/projectImages/cricket.png";
import ecommerce from "../../images/projectImages/ecommerce.jpg";

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
          appDescription={
            "The React Weather App simplifies weather checks. Enter a city name, get instant, real-time weather data. Easy, fast, and user-friendly."
          }
        />
        <Project
          image={quotes_app}
          appName={"Workout Buddy"}
          link={"https://mernstackapp-f73d4c3ddb96.herokuapp.com/"}
          appDescription={
            "Built with the MERN stack—React, MongoDB, Node.js, and Express—this app showcases comprehensive full-stack development expertise, seamlessly integrating frontend and backend functionalities."
          }
        />
        <Project
          image={ecommerce}
          appName={"Guess Number Game"}
          link={"https://guess-number-game-main.vercel.app/"}
          appDescription={
            "Welcome to the Guess Number Game! Your challenge is to guess a number between 1 and 20. After making your guess, the game will reveal the hidden number to see if you've guessed correctly."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
