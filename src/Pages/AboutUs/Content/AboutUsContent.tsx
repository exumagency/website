import "./AboutUsContent.scss";
import ourTeam from "../../../images/ourTeam.jpg";

export const AboutUsContent = () => {
    return (
        <div>
            <div className="aboutUsContainer">
                <div className="aboutUsTextContainer">
                    <h2>
                        About <span className="fSpan">Us</span>
                    </h2>
                </div>
                <div className="aboutUsContentContainer">
                    <p>
                        We are one of the most innovative modeling agencies on the market. Our marketing is rapidly advancing, and we have
                        the capability to promote almost any profile on OnlyFans.
                        <p>
                            With an experienced team at our disposal, we are certainly able to assist you with any challenges. We provide
                            support to creators at all levels, from beginners to the more advanced.
                        </p>
                    </p>
                </div>
            </div>
            <div className="ourTeamContainer">
                <div className="mainText">
                    <h2>
                        <span className="fSpan">Our</span> Team
                    </h2>
                </div>
                <div className="ourTeam">
                    <div className="ourTeamContent">
                        <p>
                            Exum operates as an internationally divices alongside a suite of tools to amplify your success on the platform.
                        </p>
                        <p>
                            We aim to elevate your existing career to unprecedented heights or spark a thriving new journey, gencome through
                            OnlyFans.
                        </p>
                    </div>
                    <div className="ourTeamImage">
                        <img src={ourTeam} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
