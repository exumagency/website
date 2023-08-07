import "./ContactForm.scss";

export const ContactForm = () => {
    return (
        <div className="ContactFormContainer">
            <form className="form">
                <div className="center">
                    <h2>Contact us</h2>
                </div>
                <div className="inputs center">
                    <div className="column">
                        <label className="label">
                            Your name<span className="required">*</span>
                        </label>
                        <input type="text" required />

                        <label className="label">
                            Country/Region<span className="required">*</span>
                        </label>
                        <input type="text" required />

                        <label className="label">Message</label>
                        <textarea className="messageInput"></textarea>
                    </div>
                    <div className="column column-right">
                        <label className="label">
                            Email<span className="required">*</span>
                        </label>
                        <input type="text" required />

                        <label className="label">Instagram (Link or username if You have)</label>
                        <input type="text" />

                        <label className="label">Twitter (Link or username if You have)</label>
                        <input type="text" />

                        <label className="label">OnlyFans (Link or username if You have)</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="center">
                    <input className="submit" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};
