import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy1 from '../../img/boy1.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { FloatingDiv } from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';

export const Intro = () => {
    
    const transition = {duration : 2, type: 'spring'};
    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}}>Olá! Eu Sou</span>
                    <span>David Edson</span>
                    <span>
                        Desenvolvedor Front-end com alto nível de 
                        experiência em web design e desenvolvimento, 
                        produzindo um trabalho de qualidade!
                    </span>
                </div>
                <button className="button i-button">Contrate-me</button>
                <div className="i-icons">
                    <a href="https://github.com/devdavidedson" target='_blank' rel="noopener noreferrer">
                        <img src={Github} alt="github-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/devdavidedson/" target='_blank' rel="noopener noreferrer">
                        <img src={LinkedIn} alt="linkedin-icon" />
                    </a>
                    <a href="https://www.instagram.com/dmi.atelie/" target='_blank' rel="noopener noreferrer">
                        <img src={Instagram} alt="insta-icon" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy1} alt="" />
                <motion.img 
                initial= {{left: '-36%'}}
                whileInView= {{left: '-24%'}}
                transition={transition}
                src={glassesimoji} alt="emojideoculos"
                className="floating-div"
                />
            <motion.div
            initial= {{top:'-4%', left: '64%'}}
            whileInView= {{left: '58%'}}
            transition={transition}
            style={{top:'-4%', left: '54%'}}  className="floating-div" >
                    <FloatingDiv image={Crown} txt1='Desenvolvedor' txt2='Web'/>
            </motion.div>
                <motion.div 
                initial= {{top:'18rem', left: "9rem"}}
                whileInView= {{left: '0rem'}}
                transition={transition}
                style={{top:'18rem', left: '0rem'}}  className="floating-div" >
                    <FloatingDiv image={thumbup} txt1='Premio de' txt2='Melhor Desing'/>
                </motion.div>
                {/* blur divs */}
                <div className="blur"
                 style={{background: "rgb(238 210 255)"}}>
                </div>
                <div className="blur"
                 style={{background: "#C1F5FF",
                 top: '17rem',
                 width: '21rem',
                 hight: '11rem',
                 left: '-9rem'
                 }}>
                </div>
            </div>
        </div>
    );
}