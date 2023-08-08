import "./HomeContent.scss";
import FAQ from "../../../componenets/FAQ";
import ContactForm from "../../../componenets/ContactForm";
import img1 from "../../../images/photo-1583900985737-6d0495555783.avif";
import { FAQProps } from "../../../componenets/FAQ/FAQ";

export const HomeContent = () => {
    const faq: FAQProps[] = [
        {
            question: "What if I don’t want to take nude photos?",
            answer: "This is a crucial decision that each individual must make based on their own comfort level. Our models should only go as far as they feel at ease with. Standard and tasteful photos, similar to what you might post on Instagram, are sufficient.",
        },
        {
            question: "What services we provide to OnlyFans creators?",
            answer: "We offer top-notch management and marketing services exclusively tailored for OnlyFans creators. Our expertise lies in optimizing your OnlyFans presence, enhancing your social media outreach, and maximizing your earnings. Our team comprises skilled chatters and ghostwriters available round-the-clock, adept at upselling your PPVs and securing high-value custom orders.",
        },
        {
            question: "Do I need to take professional photos?",
            answer: "Certainly! We know the platform well and understand what works best. Professional photos and videos are not obligatory. We guide our models on creating the ideal photos that resonate with the audience, maximizing engagement and earnings.",
        },
        {
            question: "What if I don’t want to show my face?",
            answer: "Individual choice matters most. Our models should stay comfortable and decide accordingly. Maintaining a sense of mystique by not showing faces can intrigue fans, potentially leading to higher earnings. Keeping their identity secret could captivate fans, creating a captivating allure of encountering them incognito.",
        },
        {
            question: "Do I need any expierience?",
            answer: "You don't need any experience to start a career on OnlyFans. We are here to help you with everything right from the beginning.",
        },
        {
            question: "How often can I get in touch with my manager?",
            answer: "Your personal manager is available 24/7, even on weekends, if you need to learn or inquire about something. You can also establish regular hours or days to discuss results and outcomes.",
        },
        {
            question: "How soon will I see the first results?",
            answer: "It varies depending on your existing social media presence. However, even with no followers, we can help you earn your first few dollars on the very first day. If you already have some fans or a good following on social media, we can aim for 3 to 4 figures on the first day.",
        },
    ];
    return (
        <div className="homeContent">
            <div className="firstContent">
                <div className="slogan">
                    <div className="sloganContent">
                        <h1>Empower Your OnlyFans Account - We Care About Your Business!</h1>
                        <p className="fOpacity ">Work less, earn more</p>
                        <a href="#/contact">
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
                <div className="center startYourCarrer">
                    <h1>Start your career now!</h1>
                </div>
                <div className="center">
                    <p className="fOpacity">Work less, earn more</p>
                </div>
                <div className="center">
                    <a href="#/contact">
                        <button className="apply12">Apply</button>
                    </a>
                </div>
            </div>
            <ContactForm />
            <div className="FAContainer">
                <h1 className="FAQMainText">FAQ</h1>
                <p className="fOpacity">Most frequent questions</p>
            </div>
            <div className="FAQContainer">
                {faq.map((item, index) => (
                    <FAQ key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
};
