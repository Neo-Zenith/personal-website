import "./Footer.css";
import github from "../../styles/icons/github.svg";
import linkedin from "../../styles/icons/linkedin.svg";

export default function Footer() {
    return (
        <>
            <div className="footer-desktop">
                <ul className="footer-links">
                    <li className="footer-link">
                        <a
                            href="https://github.com/Neo-Zenith"
                            target="__blank"
                        >
                            <img className="footer-link-img" src={github} />
                        </a>
                    </li>
                    <li className="footer-link">
                        <a
                            href="https://www.linkedin.com/in/juin-lee"
                            target="__blank"
                        >
                            <img className="footer-link-img" src={linkedin} />
                        </a>
                    </li>
                </ul>
                <div className="footer-vertical-line"></div>
            </div>
            <div className="footer-mobile">
                <ul className="footer-links">
                    <li className="footer-link">
                        <a
                            href="https://github.com/Neo-Zenith"
                            target="__blank"
                        >
                            <img className="footer-link-img" src={github} />
                        </a>
                    </li>
                    <li className="footer-link">
                        <a
                            href="https://www.linkedin.com/in/juin-lee"
                            target="__blank"
                        >
                            <img className="footer-link-img" src={linkedin} />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
