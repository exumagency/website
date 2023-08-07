import "./Footer.scss";
import logo from "../../images/logo.png";
import igLogo from "../../images/igLogo.png";

export const Footer = () => {
    return (
        <div className="fContent">
            <div className="fContact">
                <div className="fMaxWidth">
                    <h3>Let us help You with marketing and managing your OnlyFans!</h3>
                    <a href="/contact">
                        <button className="hContactUs">Contact us</button>
                    </a>
                </div>
            </div>
            <div className="fInformations">
                <div className="fMaxWidth">
                    <div className="container1 box">
                        <img src={logo} alt="logo" width={120} />
                    </div>
                    <div className="container2 box">
                        <p>
                            About <span className="fSpan">Exum</span>
                        </p>
                        <p className="fOpacity">
                            We are great and one of the best agency on all of the worldWe are great and one of the best agency on all of the
                            worldWe are great and one of the best agency on all of the worldWe
                        </p>
                    </div>
                    <div className="container3 box">
                        <p>Useful link and Resources</p>

                        <a className="fOpacity" href="/">
                            <p>Home</p>
                        </a>

                        <a className="fOpacity" href="/about-us">
                            <p>About us</p>
                        </a>
                        <a className="fOpacity" href="/contact">
                            <p>Contact</p>
                        </a>

                        <p className="fOpacity">exumagency@gmail.com</p>

                        <a className="fIgContact" href="https://www.instagram.com/exumagency/">
                            <img src={igLogo} alt="instagram logo" width={30} height={30} />
                            <p className="fOpacity">@exumagency</p>
                        </a>
                    </div>
                    <div className="container4 box">
                        <a href="/contact">
                            <button className="fApply">Apply Now</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="fCopyWrites">
                <div className="fContainer fOpacity">
                    <p className="fOpacity">© {new Date().getFullYear()} Exum Agency. All rights reserved | OnlyFans Management Agency</p>
                </div>
            </div>
        </div>
    );
};
