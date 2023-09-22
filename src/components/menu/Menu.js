import React, { useState, useEffect } from 'react'
import styles from "./Menu.module.css"
import SideMenu from '../sidemenu/SideMenu'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    const [isMobile, setIsMobile] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <div className={styles.container}>


            {isMobile ? <SideMenu setIsMobile={setIsMobile} /> : ""}

            <div className={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Link to="/" style={{textDecoration:"none", color: "black"}}>amar's blog</Link>
                    </div>
                </div>
                <div className={styles.right}>

                    <ul>
                        
                            <Link  className={styles.deco} to="/about"><li className={styles.deco}>about </li></Link>
                       
                            <a style={{textDecoration: "none", color: "black"}} href={props.whatido}><li>what i do </li> </a>
                         <a style={{textDecoration: "none", color: "black"}} href={props.projectString}><li>my work </li> </a> 
                        <li> <a style={{textDecoration: "none", color: "black"}} href={props.contactString}> contact </a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.hamburger}>
                <svg onClick={() => { setIsMobile(true) }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
        </div>
    )
}

export default Menu