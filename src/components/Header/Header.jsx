import './Header.css'

function Header(){
    return(
        <header>
            <div className="header-logo">
                <h1>LOGO</h1>
            </div>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li className="header-li"><a href="/">INÍCIO</a></li>
                    <li className="header-li"><a href="/membros">MEMBROS</a></li>
                    <li className="header-li"><a href="/estatuto">ESTATUTO</a></li>                    
                    <li className="header-li"><a href="/contato">CONTATO</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;