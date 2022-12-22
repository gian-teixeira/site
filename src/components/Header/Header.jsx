import { NavLink } from "react-router-dom";

import './Header.css'

function Header(){
    return(
        <header>
            <div className="header-logo">
                <h1>LOGO</h1>
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