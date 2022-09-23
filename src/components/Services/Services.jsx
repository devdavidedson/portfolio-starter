import React from "react"
import './Services.css';
import HeatEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { Card } from "../Card/Card";
import resume from './David-Edson.pdf';

export const Services = () => {
    return (
        <div className="services">
            {/*Lado esquerdo */}
            <div className="awesome">
                <span>Meus Incríveis</span>
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
                <div style={{left: '14rem'}}>
                    <Card 
                    emoji = {HeatEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Sketch, Gimp'}
                    />
                </div>
                <div style={{left: '-4rem', top: '12rem'}}>
                    <Card 
                    emoji = {Glasses}
                    heading = {'Desenvolvedor'}
                    detail = {'HTML, CSS, Javascript, React,'}
                    />
                </div>
                <div style={{left: '12rem', top: '19rem'}}>
                    <Card 
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    />
                </div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    );
}