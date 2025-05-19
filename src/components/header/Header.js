import './Header.css'

function Header(){

    return (
        <header>
            <nav>
                <span id="logo">
                    <a href="">NC</a>
                </span>
                <ul className="nav-list">
                    <li className="nav-item">
                        <hr className="nav-line"/>
                        <a href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <hr className="nav-line"/>
                        <a href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <hr className="nav-line"/>
                        <a href="#">Experience</a>
                    </li>
                    <li className="nav-item">
                        <hr className="nav-line"/>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;