import React, { useEffect, useState } from 'react'
import creativeLogo from "../../images/creativeLogo.png"
import styles from "./Skills.module.css"
import mongoDbLogo from "../../images/mern/mongodb.svg"
import mongoDbLogo2 from "../../images/mern/mongodb_2.svg"
import expressLogo from "../../images/mern/express.svg"
import reactLogo from "../../images/mern/react.svg"
import nodeJsLogo from "../../images/mern/node-js.svg"

const Skills = () => {
  const [value, setValue] = useState(false);

  const handleResize = () => {
    if(window.innerWidth < 768) {
      setValue(true)
    }else {
      setValue(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  return (
    <div id="section_whatido" className={styles.container}>
      <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.creativeLogo}>
          <img src={creativeLogo} alt="creative_logo_bulb" />
        </div>
        {/* <div className={styles.titles}>CREATIVE  <br /> DEVELOPER</div> */}
        <div className={styles.titles}>I Made <br /> Web Apps</div>
        <div className={styles.stack}> <span style={{fontSize: "15px"}}>using...</span> MERN STACK</div>
      </div>
      <div className={styles.right}>
        <div className={`${styles.mongoDbLogo} ${styles.mernLogo}`}>
          <img src={value ?  mongoDbLogo2 : mongoDbLogo} alt="mongoDbLogo" />
        </div>
        <div className={`${styles.expressLogo} ${styles.mernLogo}`}>
          <img src={expressLogo} alt="expressLogo" />
        </div>
        <div className={`${styles.reactLogo} ${styles.mernLogo}`}>
          <img src={reactLogo} alt="reactLogo" />
        </div>
        <div className={`${styles.nodeJsLogo} ${styles.mernLogo}`}>
          <img src={nodeJsLogo} alt="nodeJsLogo" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills