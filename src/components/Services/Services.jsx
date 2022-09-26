import React from "react"
import './Services.css';
import HeatEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { Card } from "../Card/Card";
import resume from './David-Edson.pdf';
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';

export const Services = () => {

    const transition = {duration : 2, type: 'spring'};


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services" id='Services'>
            {/*Lado esquerdo */}
            <div className="awesome">
                <span style={{color: darkMode? 'white': '' }}>Meus Incríveis</span>
                <span>Serviços</span>
                <spane>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur aspernatur provident
                    <br />
                    unde ea a velit laborum exercitationem id libero?
                </spane>
                <a href={resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur" style={{background: "#ABF1FF94",}}>
                </div>
            </div>
            {/* Lado Direito */}
            <div className="cards">
                <motion.div
                initial= {{left: "25%"}}
                whileInView= {{left: '14rem'}}
                transition={transition}
                style={{left: '14rem'}}>
                    <Card 
                    emoji = {HeatEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Sketch, Gimp, Photoshop, Adobe, Adobe x1'}
                    />
                </motion.div>
                <div style={{left: '-4rem', top: '12rem'}}>
                    <Card 
                    emoji = {Glasses}
                    heading = {'Desenvolvedor'}
                    detail = {'HTML, CSS, Javascript, React, Bootstrap, Sass, NodeJS'}
                    />
                </div>
                <motion.div 
                initial= {{left: "25%"}}
                whileInView= {{left: '12rem'}}
                transition={transition}
                style={{left: '12rem', top: '19rem'}}>
                    <Card 
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    );
}