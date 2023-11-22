import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Navbar.css";
import DrawerButton from "../Button/DrawerButton";
import logo from "../../styles/img/logo.png";

export default function Navbar() {
    const [active, setActive] = useState(false);

    const handleMobileMenu = () => {
        if (active) {
            document
                .getElementById("navbar-mobile-drawer")
                .classList.remove("active");
            setActive(false);
        } else {
            document
                .getElementById("navbar-mobile-drawer")
                .classList.add("active");
            setActive(true);
        }
    };

    const onNavigateToResume = () => {
        if (window.innerWidth < 720) {
            window.location.href = "/resume.pdf";
            return;
        } else {
            window.open("/resume.pdf", "_blank");
        }
    };

    useEffect(() => {
        if (active) {
            document.getElementById("main").classList.add("blur");
        } else {
            document.getElementById("main").classList.remove("blur");
        }
    }, [active]);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 720) {
                setActive(false);
                document
                    .getElementById("navbar-mobile-drawer")
                    .classList.remove("active");
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    return (
        <>
            <div className="navbar-wrapper">
                <div className="navbar-logo">
                    <a href="#">
                        <img src={logo} />
                    </a>
                </div>
                <div className="navbar-desktop">
                    <ul className="navbar-links">
                        <li className="navbar-link">
                            <a href="#about">
                                <span className="navbar-link-prefix">01.</span>
                                <span className="navbar-link-label">About</span>
                            </a>
                        </li>
                        <li className="navbar-link">
                            <a href="#experiences">
                                <span className="navbar-link-prefix">02.</span>
                                <span className="navbar-link-label">Work</span>
                            </a>
                        </li>
                        <li className="navbar-link">
                            <a href="#projects">
                                <span className="navbar-link-prefix">03.</span>
                                <span className="navbar-link-label">
                                    Projects
                                </span>
                            </a>
                        </li>
                        <li className="navbar-link">
                            <a href="#contact">
                                <span className="navbar-link-prefix">04.</span>
                                <span className="navbar-link-label">
                                    Contact
                                </span>
                            </a>
                        </li>
                    </ul>
                    <div className="navbar-resume-link">
                        <Button label={"Resume"} onClick={onNavigateToResume} />
                    </div>
                </div>
                <div className="navbar-mobile">
                    <DrawerButton
                        state={active}
                        onOpen={() => handleMobileMenu()}
                        onClose={() => handleMobileMenu()}
                        cssOverrides={{
                            position: "absolute",
                            zIndex: 999,
                            marginLeft: "-3.5rem",
                            marginTop: "3rem",
                        }}
                    />
                    <div
                        id="navbar-mobile-drawer"
                        className="navbar-mobile-drawer"
                    >
                        <ul className="navbar-mobile-links">
                            <li className="navbar-mobile-link">
                                <a
                                    onClick={() => {
                                        setActive(false);
                                        handleMobileMenu();
                                    }}
                                    href="#about"
                                >
                                    <span className="navbar-link-prefix">
                                        01.
                                    </span>
                                    <span className="navbar-link-label">
                                        About
                                    </span>
                                </a>
                            </li>
                            <li className="navbar-mobile-link">
                                <a
                                    onClick={() => {
                                        setActive(false);
                                        handleMobileMenu();
                                    }}
                                    href="#experiences"
                                >
                                    <span className="navbar-link-prefix">
                                        02.
                                    </span>
                                    <span className="navbar-link-label">
                                        Work
                                    </span>
                                </a>
                            </li>
                            <li className="navbar-mobile-link">
                                <a
                                    onClick={() => {
                                        setActive(false);
                                        handleMobileMenu();
                                    }}
                                    href="#projects"
                                >
                                    <span className="navbar-link-prefix">
                                        03.
                                    </span>
                                    <span className="navbar-link-label">
                                        Projects
                                    </span>
                                </a>
                            </li>
                            <li className="navbar-mobile-link">
                                <a
                                    onClick={() => {
                                        setActive(false);
                                        handleMobileMenu();
                                    }}
                                    href="#contact"
                                >
                                    <span className="navbar-link-prefix">
                                        04.
                                    </span>
                                    <span className="navbar-link-label">
                                        Contact
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="navbar-mobile-resume-link">
                            <Button
                                label={"Resume"}
                                onClick={onNavigateToResume}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
