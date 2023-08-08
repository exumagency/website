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
                        My super agencja pieniądze bardzo duze kebab wołowina na cienkim ossy mieszane. To ogolnie ma być jakuś dlugi teks
                        żebym przetestował jakkuś dlugi teks żebym przetestował jak to gówno ktore będzie nam kosić w
                    </p>
                    <p>
                        ncja pieniądze bardzo duze kebab wołowina na cienkim ossy mieszane. To ogolnie ma być jakuś dlugi teks żebym
                        przetestował jak to gówno ktore będzie nam kosić w chuj siana będzie wyglądać. My super agencja pieniądze bardzo
                        duze kebab wołowina na cienkim ossy mieszane. To ogolnie ma być jakuś dlugi teks żebym przetestował jak to gówno
                        ktore będzie nam kosić w chuj siana będzie wyglądać. My super
                    </p>
                    <p>
                        chuj siana będzie wyglądać. My super agencja pieniądze bardzo duze kebab wołowina na cienkim ossy mieszane. To
                        ogolnie ma być jakuś dlugi teks żebym przetestował jak to gówno ktore będzie nam kosić w chuj siana będzie wyglądać.
                        My super age
                    </p>
                    <p>
                        to gówno ktore będzie nam kosić w chuj siana będzie wyglądać. My super agencja pieniądze bardzo duze kebab wołowina
                        na cienkim ossy mieszane. To ogolnie ma być jakuś dlugi teks żebym przetestował jak to gówno ktore będzie nam kosić
                        w chuj siana będzie wyglądać. My super agencja pieniądze bardzo duze kebab wołowina na cienkim ossy mieszane. To
                        ogolnie ma być ja
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
                        <p>Exum operates as an internationally divices alongside a suite of tools to a</p>
                        <p>
                            mplify your success on the platform. We aim to elevate your existing career to unprecedented heights or spark a
                            thriving new journey, gencome through OnlyFans.
                        </p>
                        <p>
                            mplify your success on the platform. We aim to elevate your existing career to unprecedented heights or spark a
                            thriving new journey, generating substantial income through OnlyFans.
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
