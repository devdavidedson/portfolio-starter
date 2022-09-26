import React from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from 'react';
import { themeContext } from "../../Context";
import { useContext } from "react";

export const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qwbmppa', 'template_ym037wj', form.current, '6ShmbTh8MJpzUk6qF')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white': ''}}>Para mais Informações</span>
                    <span>Contate-me</span>
                </div>
                <div className="blur s-blur1"
                style={{ background: "#ABF1FF94" }}>
                </div>
            </div>

            {/* Lado direito */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Nome" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Mensagem" />
                    <input type="submit" value="Enviar" className="button" />
                    <span>{done && "Obrigado por entrar em contato!"}</span>
                    <div className="blur c-blur1"
                    style={{ background: "var(--purple)" }}>
                    </div>
                </form>
            </div>
        </div>
    );
}