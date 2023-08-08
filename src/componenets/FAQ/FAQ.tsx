import "./FAQ.scss";
import React, { useState } from "react";
import capture from "../../images/dasdsa.png";

export interface FAQProps {
    question: string;
    answer: string;
}

export const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const handleSlideClick = () => {
        setIsTextVisible(!isTextVisible);
    };

    return (
        <>
            <div onClick={handleSlideClick} className={`FAQContentContainer${isTextVisible ? " open" : ""}`}>
                <h2>{question}</h2>
                <div className="answer">
                    <p>{answer}</p>
                </div>
                <img src={capture}  alt="arrow" />
            </div>
        </>
    );
};
