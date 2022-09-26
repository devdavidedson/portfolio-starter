import React from "react";
import './Navbar.css';
import { Toggle } from "../Toggle/Toggle";
import { Link } from 'react-scroll';

export const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">David Edson</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>

                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Inicio</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Serviços</li>
                        </Link>
                        <Link spy={true} to='Expience' smooth={true}>
                            <li>Experiência</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfólio</li>
                        </Link>
                        <Link spy={true} to='Testmonials' smooth={true}>
                            <li>Depoimentos</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    Contato
                </button>
            </div>
        </div>
    );
}