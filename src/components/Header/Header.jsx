import { NavLink } from "react-router-dom";

import './Header.css'

function Header(){
    return(
        <header>
            <div className="header-logo">
                <img src="./src/assets/logo.svg" alt="" />
                <div><h1>SEM CONDIÇÕES</h1></div>
            </div>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li className="header-li slide-top">
                        <NavLink to="/" >INÍCIO</NavLink></li>
                    <li className="header-li slide-top">
                        <NavLink to="membros">MEMBROS</NavLink></li>
                    <li className="header-li slide-top">
                        <NavLink to="estatuto">ESTATUTO</NavLink></li>                    
                    <li className="header-li slide-top">
                        <NavLink  to="contato">CONTATO</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;