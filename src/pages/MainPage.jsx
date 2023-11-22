import Footer from "../components/Footer/Footer";
import Watermark from "../components/Footer/Watermark";
import Navbar from "../components/Navbar/Navbar";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experiences from "../sections/Experiences";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import "./MainPage.css";

export default function MainPage() {
    return (
        <>
            <div className="main-page-wrapper">
                <Navbar />
                <div id="main">
                    <Hero />
                    <About />
                    <Experiences />
                    <Projects />
                    <Contact />
                    <Footer />
                    <Watermark />
                </div>
            </div>
        </>
    );
}
