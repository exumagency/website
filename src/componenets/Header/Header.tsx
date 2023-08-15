import "./Header.scss";
import logo from "../../images/logo.png";
import igLogo from "../../images/igLogo.png";
import { useState } from "react";

export const Header = () => {
    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    const contentClickHandler = () => {
        if (menu) {
            closeMenu();
        }
    };

    return (
        <>
            <div className="menuContainer">
                <div className={`menu${menu ? " open" : ""}`}>
                    <div className="leaveMenuContainer" onClick={closeMenu}>
                        <div className="leaveMenu">X</div>
                    </div>
                    <a href="#/">
                        <h3>Home</h3>
                    </a>
                    <a href="#/about-us">
                        <h3>About Us</h3>
                    </a>
                    <a href="#/contact">
                        <h3>Contact</h3>
                    </a>
                </div>
            </div>
            <div className="hContent" onClick={contentClickHandler}>
                <div className="hLeftSide">
                    <div className="hSelect" onClick={openMenu}>
                        <div className="line1" />
                        <div className="line2" />
                        <div className="line3" />
                    </div>
                    <a href="#/">
                        <img className="hLogo" src={logo} alt="logo" width={120} />
                    </a>
                    <a className="fIgContact" href="https://www.instagram.com/exumagency/">
                        <div className="hIgLogoContainer">
                            <img src={igLogo} className="hIgLogo" alt="instagram logo" width={30} height={30} />
                            <p className="fOpacity">@exumagency</p>
                        </div>
                    </a>
                </div>
                <div className="hMenu">
                    <a href="#/">Home</a>
                    <a href="#/about-us">About Us</a>
                    <a href="#/contact">Contact</a>
                </div>
                <div className="hRightSide">
                    <a href="#/contact">
                        <button className="hApply">Apply Now</button>
                    </a>
                </div>
            </div>
            <div className="headerMargin"></div>
        </>
    );
};
