import React from "react";
import './Navbar.css';
export const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">David Edson</div>
                <span>Toggler</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Inicio</li>
                        <li>Serviços</li>
                        <li>Expiriência</li>
                        <li>Portfólio</li>
                        <li>Depoimentos</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contato
                </button>
            </div>
        </div>
    );
}