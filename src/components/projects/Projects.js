import React from 'react'
import styles from "./Projects.module.css"
import Project from './project/Project'
import weather_app from "../../images/projectImages/weather_app.png"
import quotes_app from "../../images/projectImages/quotes_app.png"
import twitter_app from "../../images/projectImages/twitter.png"
import guess_number_game from "../../images/projectImages/guess_number_game.png"

const Projects = () => {
    return (
        <div id='section_project' className={styles.container}>
            <div className={styles.content}>
                <h2>Projects</h2>
                <p>I love learning about new technology and design, which helps me create better projects.</p>
                <p>I'm always trying to do something new and exciting, which keeps me motivated to improve my skills.</p>
            </div>
            <div className={styles.projects}>
                <Project image={weather_app} appName={"Weather App"} link={"https://amar-weather.netlify.app/"} appDescription={"The React Weather App simplifies weather checks. Enter a city name, get instant, real-time weather data. Easy, fast, and user-friendly."}/>
                <Project image={quotes_app} appName={"Quotes App"} link={"https://amar-quotes.netlify.app/quotes"} appDescription={"The Great Quotes App is a React-based web application designed for users to explore, save, and share inspiring quotes."}/>
                {/* <Project image={twitter_app} appName={"Twitter Clone App"} link={"https://am-twitter-clone.netlify.app/"} appDescription={"The React Twitter Clone offers a simplified Twitter-like experience. Post tweets, follow users, and engage with content seamlessly. User-friendly and intuitive for quick social networking."}/> */}
                <Project image={guess_number_game} appName={"Guess Number Game"} link={"https://guess-number-game-main.vercel.app/"} appDescription={"Welcome to the Guess Number Game! Your challenge is to guess a number between 1 and 20. After making your guess, the game will reveal the hidden number to see if you've guessed correctly."}/>
            
            </div>
        </div>
    )
}

export default Projects