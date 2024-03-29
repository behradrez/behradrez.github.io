import { useState } from "react";
import React from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
            <img className={`${styles.menuBtn} ${menuOpen && styles.closeBtn}`} src={
                menuOpen 
                    ? getImageUrl("nav/closeIcon.svg")
                    : getImageUrl("nav/menuIcon.svg")}
                    onClick={() => setMenuOpen(!menuOpen)}
                    />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#experience">Experience</a>
                </li><li onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>;
}