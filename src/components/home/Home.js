import React from "react";
import styles from "./Home.module.css";
import bootstrap from "bootstrap";
import me from "../../images/me.jpg";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div id="section_1" className={styles.container}>
      <Menu
        projectString={"#section_project"}
        contactString={"#section_contact"}
        whatido={"#section_whatido"}
      />

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p className={styles.name}>Hi, My Name is Amar.</p>

          <p className={styles.about}>
            Passionate developer crafting exceptional websites with beautiful
            user experiences.
          </p>
          <p className={styles.skills}>
            Amar is a skilled web developer proficient in HTML, CSS, JavaScript,
            React, Bootstrap and Material UI.
          </p>

          <div className={styles.buttons}>
            <button className={styles.linkedin}>
              {" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                href="https://www.linkedin.com/in/amarmangarhia/"
              >
                {" "}
                Linkedin{" "}
              </a>
            </button>
            <button className={styles.aboutMe}>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/about"
              >
                {" "}
                About Me{" "}
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <img src={me} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default Home;
