import React from "react";
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cordel from '../../img/cordel.png';
import RslTomaz from '../../img/rsltomaz.png';
import InstaPort from '../../img/instaport1.png';
import Bugdroid from '../../img/bugdroid.png';
import 'swiper/css';
import { themeContext } from "../../Context";
import { useContext } from "react";

export const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="portfolio" id="Portfolio">
            {/* Heading */}
            <span style={{color: darkMode? 'white': ''}}>Projetos Recentes</span>
            <span>Portfólio</span>

            {/* Sliders */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Cordel} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={RslTomaz} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={InstaPort} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Bugdroid} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
}