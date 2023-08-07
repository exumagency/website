import "./HomeContent.scss";
import FAQ from "../../../componenets/FAQ";
import img1 from "../../../images/photo-1583900985737-6d0495555783.avif";
import img2 from "../../../images/girl-1953201_1280.jpg";

export const HomeContent = () => {
    return (
        <div className="homeContent">
            <div className="firstContent">
                <div className="slogan">
                    <div className="sloganContent">
                        <h1>Empower Your OnlyFans Account - We Care About Your Business!</h1>
                        <p className="fOpacity ">Work less, earn more</p>
                        <a href="/contact">
                            <button className="apply">Apply</button>
                        </a>
                    </div>
                </div>
                <div className="firstImageContainer">
                    <img className="img" src={img1} alt="women" />
                </div>
            </div>
            <div className="servicesContainer">
                <div className="mainTextContainer">
                    <h1>
                        Our <span className="fSpan">services</span>
                    </h1>
                </div>
                <div className="servicesContent">
                    <div className="point">
                        <h2 className="fSpan">01.</h2>
                        <h3>We take over 90 percent of your responsibilities</h3>
                    </div>
                    <div className="point rightPoint">
                        <h2 className="fSpan">02.</h2>
                        <h3>You will get an account manager who takes care of you 24/7</h3>
                    </div>
                    <div className="point ">
                        <h2 className="fSpan">03.</h2>
                        <h3>We assist even if you have never had any prior experience with it</h3>
                    </div>
                    <div className="point rightPoint">
                        <h2 className="fSpan">04.</h2>
                        <h3>Social media management of existing or new accounts (Instagram, TikTok, Twitter and a lot more)</h3>
                    </div>
                    <div className="point">
                        <h2 className="fSpan">05.</h2>
                        <h3>We take care of your direct messages on Social Media</h3>
                    </div>
                    <div className="point rightPoint">
                        <h2 className="fSpan">06.</h2>
                        <h3>PPV + tip sales and upsell management</h3>
                    </div>
                </div>
            </div>
            <div className="secondImage" />
            <div>
                <div className="center">
                    <h2>Start your career now!</h2>
                </div>
                <div className="center">
                    <p className="fOpacity">Work less, earn more</p>
                </div>
                <a href="/contact">
                    <button className="apply12">Apply</button>
                </a>
            </div>
            {/* <FAQ question="pytanie kurwa" answer="odpowiedz kurwa"></FAQ> */}
        </div>
    );
};
