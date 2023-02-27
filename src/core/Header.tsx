import { NavLink } from "react-router-dom";
import logo from "../assets/images/shared/logo.svg"

function Header() {
    return (
        <>
            <figure className="logo-container">
                <NavLink to="/">
                    <img src={logo} alt="space-tourism" />
                </NavLink>
            </figure>
            <nav className="nav-links flex-grow-1 d-flex justify-content-end">
                <ul className="link-container d-flex align-items-center">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link"><span className="nav-text">00 <span className="ms-2">Home</span></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/destination" className="nav-link"><span className="nav-text">01 <span className="ms-2"> Destination</span></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/crew" className="nav-link"><span className="nav-text">02 <span className="ms-2">Crew</span></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/technology" className="nav-link"><span className="nav-text">03 <span className="ms-2">Technology</span></span></NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Header;
