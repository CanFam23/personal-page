import './Header.css'

function Header(){

    return (
        <header id="nav-header">
            <nav id="nav-bar">
                <span id="logo">
                    <a href="">NC</a>
                </span>
                <ul className="nav-list">
                    <li className="nav-item">
                        <hr className="nav-line"/>
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <hr className="nav-line"/>
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <hr className="nav-line"/>
                        <a className="nav-link" href="#">Experience</a>
                    </li>
                    <li className="nav-item">
                        <hr className="nav-line"/>
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;