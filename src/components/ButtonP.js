import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLE=['btn--primary','btn--outline'];

const SIZE=['btn--medium','btn--large'];

function ButtonP({children,type,onClick,buttonStyle,buttonSize}) {
    
    const checkButtonStyle= STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

    const checkButtonSize= SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
    
    return (
        <>
        <Link to="/projects">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type} onClick={onClick}>
                {children}
            </button>
        </Link>

        </>
    )
}

export default ButtonP;
