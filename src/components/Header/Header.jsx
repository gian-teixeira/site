import { NavLink } from "react-router-dom";

import './Header.css'
import dcompLogo from "../../assets/dcomp.png"

function Header(){
    return(
        <header>
            <div className="header-logo">
                <a href="https://dcomp.ufsj.edu.br/" target="_blank">
                    <img src={dcompLogo} alt="" />
                </a>
                
                <h1>Maratona de<br/>Programação</h1>
            </div>
            
            <nav className="header-nav">
                <ul className="header-ul">
                    <li className="header-li slide-top">
                        <NavLink to="/" >INÍCIO</NavLink></li>
                    <li className="header-li slide-top">
                        <NavLink to="team">EQUIPE</NavLink></li>
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