import { NavLink } from "react-router-dom";

import logo from "../assets/images/shared/logo.svg"
import hamburger from "../assets/images/shared/icon-hamburger.svg"
import close from "../assets/images/shared/icon-close.svg"
import { useRef } from "react";

function Header() {

    const inputRef = useRef<any>();
    console.log(inputRef?.current?.checked);

    const onLinkClick = () => {
        inputRef.current.checked = false;
    }
    return (
        <>
            <input type="checkbox" name="toggleMenu" id="toggleMenu" ref={inputRef} />
            <figure className="logo-container">
                <NavLink to="/">
                    <img src={logo} alt="space-tourism" className="logo" />
                </NavLink>
            </figure>
            <nav className="nav-links flex-grow-1 d-flex justify-content-end">
                <ul className="link-container d-flex">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" onClick={onLinkClick}><span className="nav-text">00 <span className="ms-2">Home</span></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/destination" className="nav-link" onClick={onLinkClick}><span className="nav-text">01 <span className="ms-2"> Destination</span></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/crew" className="nav-link" onClick={onLinkClick}><span className="nav-text">02 <span className="ms-2">Crew</span></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/technology" className="nav-link" onClick={onLinkClick}><span className="nav-text">03 <span className="ms-2">Technology</span></span></NavLink>
                    </li>
                </ul>
            </nav>
            <div className="mobile-menu">
                <label htmlFor="toggleMenu">
                    <img src={hamburger} alt="moobile-menu" className="icon-hamburger cursor-pointer" />
                </label>
                <label htmlFor="toggleMenu">
                    <img src={close} alt="close-moobile-menu" className="icon-close cursor-pointer" />
                </label>
            </div>
        </>
    )
};

export default Header;
