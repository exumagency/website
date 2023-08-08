import Header from "../../componenets/Header";
import Footer from "../../componenets/Footer";
import "./notFoundPage.scss";

export const NotFoundPage = () => {
    return (
        <div className="NotFound">
            <Header />
            <h1>Page not found - 404</h1>
            <Footer />
        </div>
    );
};
