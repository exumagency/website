import "./ContactForm.scss";
import { useForm } from "@formspree/react";

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("mnqkpnlk");
    if (state.succeeded) {
        return (
            <div className="thankYou">
                <p>Thank you for completing the form, we will get back to you as soon as we can!</p>
            </div>
        );
    }
    return (
        <div className="ContactFormContainer">
            <form onSubmit={handleSubmit} method="POST" className="form">
                <div className="center">
                    <h2>Contact us</h2>
                </div>
                <div className="inputs center">
                    <div className="column">
                        <label className="label">
                            Your name<span className="required">*</span>
                        </label>
                        <input className="input" name="name" type="text" required />

                        <label className="label">
                            Country/Region<span className="required">*</span>
                        </label>
                        <input className="input" name="Country" type="text" required />

                        <label className="label">
                            Email<span className="required">*</span>
                        </label>
                        <input className="input" name="Email" type="email" required />

                        {/* <label className="label">Feel free to upload photo of you</label>
                        <input className="file" type="file" name="Photo" accept="image/*" /> */}
                    </div>
                    <div className="column column-right">
                        <label className="label">Instagram (Link or username if You have)</label>
                        <input className="input" name="Instagram" type="text" />

                        <label className="label">Twitter (Link or username if You have)</label>
                        <input className="input" name="Twitter" type="text" />

                        <label className="label">OnlyFans (Link or username if You have)</label>
                        <input className="input" name="OnlyFans" type="text" />

                        <label className="label">Message</label>
                        <textarea name="Message" className="messageInput input"></textarea>
                    </div>
                </div>
                <div className="center">
                    <button disabled={state.submitting} className="submit" type="submit">
                        Submit
                    </button>
                    {/* <input disabled={state.submitting} className="submit" type="submit" value="Submit" /> */}
                </div>
            </form>
        </div>
    );
};
