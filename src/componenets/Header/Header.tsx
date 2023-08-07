import "./Header.scss";
import logo from "../../images/logo.png";

export const Header = () => {
    return (
        <>
            <div className="hContent">
                <div className="hLeftSide">
                    {/* <div className="menuSelect"></div> */}
                    <img className="hLogo" src={logo} alt="logo" width={120} />
                </div>
                <div className="hMenu">
                    <a href="/">Home</a>
                    <a href="/about-us">About Us</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="hRightSide">
                    <a href="/contact">
                        <button className="hApply">Apply Now</button>
                    </a>
                </div>
            </div>
            <div className="headerMargin"></div>
        </>
    );
};
