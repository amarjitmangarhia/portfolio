import React from 'react'
import demoImage from "../../../images/projectImages/weather_app.png"
import styles from "../project/Project.module.css"
import { Link } from 'react-router-dom'

const Project = ({image,appName,appDescription, link}) => {
  return (
    <div className={styles.project}>
                    <div className={styles.projectTitle}>
                        <p>{appName}</p>
                    </div>
                    <div className={styles.projectDescription}>
                        <img src={image} alt="demo_image" />
                        <div className={styles.projectInfo}>
                            <p>{appDescription}</p>
                            <button> <Link to={link} style={{textDecoration: 'none', color: "white"}} >Explore</Link> </button>
                        </div>
                    </div>
                </div>
  )
}

export default Project