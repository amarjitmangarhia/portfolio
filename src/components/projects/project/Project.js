import React from "react";
import demoImage from "../../../images/projectImages/weather_app.png";
import styles from "../project/Project.module.css";
import { Link } from "react-router-dom";

const Project = ({ image, appName, appDescription, link, githubLink }) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectTitle}>
        <p>{appName}</p>
      </div>
      <div className={styles.projectDescription}>
        <div className={styles.image}>
          <img src={image} alt="demo_image" />
        </div>
        <div className={styles.projectInfo}>
          <p>{appDescription}</p>
          <div className={styles.buttons}>
            <button className={styles.button}>
              <Link
                to={link}
                style={{ textDecoration: "none", color: "white" }}
              >
                View Live
              </Link>
            </button>
            <button className={styles.button}>
              <Link
                to={githubLink}
                style={{ textDecoration: "none", color: "white" }}
              >
                Github
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
