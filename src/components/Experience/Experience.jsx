import React from "react";
import './Experience.css';

export const Experience = () => {
    return(
        <div className="experience">
            <div className="achievement">
                <div className="circle">1+</div>
                    <span>Anos</span>
                    <span>Experiência</span>
            </div>
            <div className="achievement">
                <div className="circle">5+</div>
                    <span>Projetos</span>
                    <span>completos</span>
            </div>
            <div className="achievement">
                <div className="circle">3+</div>
                    <span>Empresas</span>
                    <span>trabalham</span>
            </div>
        </div>
    );
}