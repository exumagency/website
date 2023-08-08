import "./Header.scss";
import logo from "../../images/logo.png";
import igLogo from "../../images/igLogo.png";

export const Header = () => {
    return (
        <>
            <div className="hContent">
                <div className="hLeftSide">
                    <img className="hLogo" src={logo} alt="logo" width={120} />
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
