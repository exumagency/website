import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import NotFoundPage from "./Pages/NotFound";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
