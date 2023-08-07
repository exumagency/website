import "./FAQ.scss";

interface FAQProps {
    question: string;
    answer: string;
}

export const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
    return (
        <div>
            <h1>{question}</h1>
            <p>{answer}</p>
        </div>
    );
};
