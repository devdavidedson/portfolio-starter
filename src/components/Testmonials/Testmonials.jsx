import React from "react";
import './Testmonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

export const Testmonials = () => {
    const clients=[
        {
            img: profilePic1,
            reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur consectetur urna, ac ullamcorper nisl pellentesque iaculis. Pellentesque et ligula ut quam dignissim condimentum vel eget nibh. Morbi eu ultrices velit. Etiam faucibus mi ac mattis ultricies."
        },
        {
            img: profilePic2,
            reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur consectetur urna, ac ullamcorper nisl pellentesque iaculis. Pellentesque et ligula ut quam dignissim condimentum vel eget nibh. Morbi eu ultrices velit. Etiam faucibus mi ac mattis ultricies."
        },
        {
            img: profilePic3,
            reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur consectetur urna, ac ullamcorper nisl pellentesque iaculis. Pellentesque et ligula ut quam dignissim condimentum vel eget nibh. Morbi eu ultrices velit. Etiam faucibus mi ac mattis ultricies."
        },
        {
            img: profilePic4,
            reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur consectetur urna, ac ullamcorper nisl pellentesque iaculis. Pellentesque et ligula ut quam dignissim condimentum vel eget nibh. Morbi eu ultrices velit. Etiam faucibus mi ac mattis ultricies."
        },
        {
            img: profilePic5,
            reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur consectetur urna, ac ullamcorper nisl pellentesque iaculis. Pellentesque et ligula ut quam dignissim condimentum vel eget nibh. Morbi eu ultrices velit. Etiam faucibus mi ac mattis ultricies."
        },
        {
            img: profilePic6,
            reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur consectetur urna, ac ullamcorper nisl pellentesque iaculis. Pellentesque et ligula ut quam dignissim condimentum vel eget nibh. Morbi eu ultrices velit. Etiam faucibus mi ac mattis ultricies."
        }
    ]
    return(
        <div className="t-wrapper" id="Testmonials">
            <div className="t-heading">
                <span>Clientes sempre recebem</span>
                <span> Trabalhos excepcionais</span>
                <div className="blur t-blur1" style={{
                    background: "var(--purple)"}}></div>
                <div className="blur t-blur2" style={{
                    background: "skyblue"}} ></div>
            </div>
            {/*slider */}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            >
                    {clients.map((clients, index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className="testimonials">
                                    <img src={clients.img} alt="" />
                                    <span>{clients.reviews}</span>
                                </div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
}