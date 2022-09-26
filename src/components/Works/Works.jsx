import React from "react";
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';


export const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="works">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Trabalhei para <br /> Todas Essas</span>
                <span>Marcas &#38; Clientes</span>
                <spane>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    unde ea a velit laborum exercitationem id libero?
                    <br />
                    Lorem ipsum dolor sit, ea a velit laborum exercitationem id libero?
                    <br />
                    unde amet consectetur adipisicing elit. Consequuntur aspernatur provident
                </spane>
                    <button className="button s-button">Contrate-me</button>
                <div className="blur s-blur" style={{background: "#ABF1FF94",}}>
                </div>
            </div>
        
        {/*Lado direito */}
            <div className="w-right">
                <motion.div 
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0 }}
                viewport={{margin: '-40px'}}
                transition={{duration: 3.5, type: 'spring'}}
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>                    
                </motion.div>
                
                {/* background circles */}
                
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>        
        </div>
    );
}