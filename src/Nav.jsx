import  './Nav.css'
import { Link } from 'react-router-dom'
import React from 'react';


export default function Nav (){

   
    return(
        <div className="maindiv">
            <div className="logo">
                <h3>LOGO</h3>
            </div>

            <div className="navLinks">
                <div className="links">
                    <Link to={'/'}>
                        <div>Home</div>
                    </Link>

                    <Link to={'/about'}>
                        <div>About</div>
                    </Link>

                    <Link to={'/services'}>
                        <div>Services</div>
                    </Link>

                    <Link to={'/contact'}>
                        <div>Contact</div>
                    </Link>
                    
                </div>
                <div className="linkBtn">
                <Link to={'/login'}>
                        <button>LogIn</button>
                    </Link>
                    
                    <Link to={'/'}>
                        <button>LogOut</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}