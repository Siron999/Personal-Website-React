import React from 'react'
import ButtonP from './ButtonP'
import ButtonA from './ButtonA'
import './Hero.css';
import '../App.css';

function Hero() {
    return (
        <div className='hero-container'>
            <video src='/videos/v4.mp4' autoPlay loop muted/>
            <h1>Siron Shakya</h1>
            <p>Hi, I design websites</p>
            <div className="hero-btns">
                <ButtonA className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get to know me
                </ButtonA>
                <ButtonP className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                View my work <i className="fas fa-angle-right"></i>
                </ButtonP>
            </div>
        </div>
    )
}

export default Hero;
