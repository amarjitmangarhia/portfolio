import React from 'react'
import Menu from '../menu/Menu'
import styles from "../about/About.module.css"
import img from "../../images/me.png"
import resume from "../../resume/resume.pdf"

const About = () => {
    return (
        <div className={styles.container}>
            <Menu projectString={"/#section_project"} contactString={"/#section_contact"} whatido={"/#section_whatido"} />
            <div className={styles.content}>
                <h2> About Me</h2>
                <img src={img} alt="me" />

                <div className={styles.detail}>

                    <p>My name is <span> Amarjit Singh </span>, and I am a dedicated and ambitious individual hailing from India. With a <span> Bachelor's degree in Computer Applications </span> (BCA) from Chandigarh University, I have embarked on a journey to pursue my passion for software development. Currently, I am furthering my knowledge and skills in <span> full-stack software development at Lambton College in Sarnia, Ontario, Canada. </span></p>

                    <p>My enthusiasm lies in the creation of dynamic and visually appealing websites, and I aspire to become a proficient full-stack web developer. Through my educational pursuits and personal projects, I have gained expertise in <span> HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB </span>. My proficiency in the MERN stack forms the foundation of my technical skill set.</p>

                    <p>Although I may not possess substantial professional industry experience, I have demonstrated a strong commitment to <span> self-study </span> and continuous learning to acquire proficiency in these technologies. This self-driven approach has enabled me to stay updated with the latest industry trends and best practices.</p>

                    <p>My dedication to excellence and attention to detail enable me to deliver high-quality work. I thrive in collaborative environments, leveraging my effective communication skills to collaborate with teams and contribute to the successful completion of projects. Additionally, my strong <span> problem-solving abilities </span> enable me to tackle complex challenges and find innovative solutions.</p>

                    <p>As I continue my educational journey and seek opportunities to apply my knowledge and skills in a professional setting, I am <span> eager to contribute </span> my passion for web development and my expertise in the <span> MERN stack </span> to make meaningful contributions to the field. I am confident that my strong work ethic, technical skills, and enthusiasm will enable me to thrive as a full-stack web developer and make a positive impact in the industry.</p>

                    <p>Thank you for considering my professional profile, and I look forward to the opportunity to discuss how my skills and experiences align with your organization's goals.</p>

                    <div className={styles.connection}>
                        <div className={styles.connect}>
                            <p>Connect With me on Linkedin</p>
                          <a href='https://www.linkedin.com/in/amarjitsingh1/' >  <button>Linkedin</button></a>
                        </div>
                        <div className={styles.connect}>
                            <p>Download Resume</p>
                          <a href={resume} download="amar_resume" target="_blank" rel="noreferrer" >  <button>Resume</button></a>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.footer}>
                <p>Made With React</p>
            </div>
        </div>
    )
}

export default About