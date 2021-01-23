import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import {useEffect} from 'react';
import './Navbar.css';

function NavBar() {

const [click,setClick] = useState(false);
const [button,setButton] =useState(true);

const handleClick =()=>{
    setClick(!click);

};

useEffect(() => {
    if(window.innerWidth <= 960){
        setButton(false);
    }
}, [])

const showButton=()=>{
    if(window.innerWidth <= 960){
        setButton(false);
    }else{
        setButton(true);
    }

};

window.addEventListener('resize',showButton);

const closeMobileMenu =()=>{
    setClick(false);

};
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    SIRON SHAKYA<i class="fas fa-code-branch"></i>  
                </Link>   
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About Me</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact</Button>}
            </div>
          </nav>

        </>
    )
}

export default NavBar;
