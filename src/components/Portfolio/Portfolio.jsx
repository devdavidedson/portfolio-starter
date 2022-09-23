import React from "react";
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cordel from '../../img/cordel.png';
import RslTomaz from '../../img/rsltomaz.png';
import InstaPort from '../../img/instaport.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css';

export const Portfolio = () => {
    return(
        <div className="portfolio">
            {/* Heading */}
            <span>Projetos Recentes</span>
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
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
}