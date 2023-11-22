import SectionHeader from "../components/SectionHeader/SectionHeader";
import "./About.css";
import profile from "../styles/img/profile.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function About() {
    return (
        <>
            <div className="about-wrapper" id="about">
                <div>
                    <SectionHeader count={"01."} label={"About Me"} />
                    <div className="about-content">
                        <div className="about-text">
                            <span>
                                Hello! My name is Lee Juin and I enjoy working
                                on scalable projects that live on the Internet.
                                My interest in web development started back in
                                2021 when I decided to try building a simple
                                gacha simulator — turns out building a pleasant
                                GUI with Python Tkinter as a beginner is much
                                harder than expected!!
                            </span>
                            <span>
                                Currently in my penultimate year at Nanyang
                                Technological University, I am set to graduate
                                in December 2024, with a specialized focus on
                                Artificial Intelligence. I am skilled in popular
                                frameworks (MERN, Django, Flask), DevOps
                                practices (CI/CD) and hyperscalers (Microsoft
                                Azure).
                            </span>
                            <span>
                                I am currently working at{" "}
                                <a
                                    href="https://www.ntu.edu.sg/temasek-labs"
                                    target="__blank"
                                    className="about-highlight"
                                >
                                    Temasek Lab
                                </a>{" "}
                                as a Full-stack Software Engineer Intern, where
                                I help build a gateway platform that integrates
                                various NLP models for streamlined access.
                            </span>
                            <span>
                                Here are a few technologies I've been working
                                with recently:
                            </span>
                            <span id="about-tech">
                                <ul className="about-tech-list">
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        Docker
                                    </li>
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        Redis
                                    </li>
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        NestJS
                                    </li>
                                </ul>
                                <ul className="about-tech-list">
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        React
                                    </li>
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        MongoDB
                                    </li>
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        Supabase
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className="about-img-container">
                            <div className="about-img">
                                <div className="about-img-overlay"></div>
                                <img src={profile} />
                                <div className="about-img-bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
